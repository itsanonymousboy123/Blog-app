import { Alert, Button, Modal, TextInput, Textarea } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Comment from './Comment';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function CommentSection({ postId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState(null);
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 200) {
      return;
    }
    try {
      const res = await fetch('/api/comment/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: comment,
          postId,
          userId: currentUser._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setComment('');
        setCommentError(null);
        setComments([data, ...comments]);
      }
    } catch (error) {
      setCommentError(error.message);
    }
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await fetch(`/api/comment/getPostComments/${postId}`);
        if (res.ok) {
          const data = await res.json();
          setComments(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getComments();
  }, [postId]);

  const handleLike = async (commentId) => {
    try {
      if (!currentUser) {
        navigate('/sign-in');
        return;
      }
      const res = await fetch(`/api/comment/likeComment/${commentId}`, {
        method: 'PUT',
      });
      if (res.ok) {
        const data = await res.json();
        setComments(
          comments.map((comment) =>
            comment._id === commentId
              ? {
                  ...comment,
                  likes: data.likes,
                  numberOfLikes: data.likes.length,
                }
              : comment
          )
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = async (comment, editedContent) => {
    setComments(
      comments.map((c) =>
        c._id === comment._id ? { ...c, content: editedContent } : c
      )
    );
  };

  const handleDelete = async (commentId) => {
    setShowModal(false);
    try {
      if (!currentUser) {
        navigate('/sign-in');
        return;
      }
      const res = await fetch(`/api/comment/deleteComment/${commentId}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        const data = await res.json();
        setComments(comments.filter((comment) => comment._id !== commentId));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='max-w-2xl mx-auto w-full p-4 bg-white shadow-lg rounded-lg'>
  {currentUser ? (
    <div className='flex items-center gap-2 mb-4 text-gray-600 text-sm'>
      <p>Signed in as:</p>
      <img
        className='h-8 w-8 object-cover rounded-full border border-gray-300'
        src={currentUser.profilePicture}
        alt=''
      />
      <Link
        to={'/dashboard?tab=profile'}
        className='text-xs text-cyan-600 hover:underline font-medium'
      >
        @{currentUser.username}
      </Link>
    </div>
  ) : (
    <div className='text-sm text-teal-600 mb-4 flex gap-1'>
      You must be signed in to comment.
      <Link className='text-blue-600 hover:underline' to={'/sign-in'}>
        Sign In
      </Link>
    </div>
  )}
  {currentUser && (
    <form
      onSubmit={handleSubmit}
      className='border border-teal-500 rounded-md p-4 bg-gray-50'
    >
      <Textarea
        placeholder='Add a comment...'
        rows='4'
        maxLength='200'
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        className='border border-gray-300 rounded-md p-2 mb-4 bg-white'
      />
      <div className='flex justify-between items-center'>
        <p className='text-gray-600 text-xs'>
          {200 - comment.length} characters remaining
        </p>
        <Button
          outline
          gradientDuoTone='purpleToBlue'
          type='submit'
          className='px-4 py-2'
        >
          Submit
        </Button>
      </div>
      {commentError && (
        <Alert color='failure' className='mt-4'>
          {commentError}
        </Alert>
      )}
    </form>
  )}
  {comments.length === 0 ? (
    <p className='text-sm mb-4'>No comments yet!</p>
  ) : (
    <>
      <div className='text-sm mb-4 flex items-center gap-2'>
        <p>Comments</p>
        <div className='border border-gray-400 py-1 px-2 rounded-md bg-gray-100'>
          <p className='text-gray-600'>{comments.length}</p>
        </div>
      </div>
      {comments.map((comment) => (
        <Comment
          key={comment._id}
          comment={comment}
          onLike={handleLike}
          onEdit={handleEdit}
          onDelete={(commentId) => {
            setShowModal(true);
            setCommentToDelete(commentId);
          }}
        />
      ))}
    </>
  )}
  <Modal
    show={showModal}
    onClose={() => setShowModal(false)}
    popup
    size='md'
    className='rounded-lg'
  >
    <Modal.Header className='bg-gray-200 border-b border-gray-300' />
    <Modal.Body>
      <div className='text-center'>
        <HiOutlineExclamationCircle className='h-16 w-16 text-gray-400 mb-4 mx-auto' />
        <h3 className='mb-5 text-lg text-gray-600'>
          Are you sure you want to delete this comment?
        </h3>
        <div className='flex justify-center gap-4'>
          <Button
            color='failure'
            onClick={() => handleDelete(commentToDelete)}
            className='px-4 py-2'
          >
            Yes, I'm sure
          </Button>
          <Button
            color='gray'
            onClick={() => setShowModal(false)}
            className='px-4 py-2'
          >
            No, cancel
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
</div>

  );
}