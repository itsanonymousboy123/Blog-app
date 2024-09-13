import moment from 'moment';
import { useEffect, useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Button, Textarea } from 'flowbite-react';

export default function Comment({ comment, onLike, onEdit, onDelete }) {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comment.userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [comment]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedContent(comment.content);
  };

  const handleSave = async () => {
    try {
      const res = await fetch(`/api/comment/editComment/${comment._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: editedContent,
        }),
      });
      if (res.ok) {
        setIsEditing(false);
        onEdit(comment, editedContent);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='flex p-4 border-b border-gray-300 dark:border-gray-600 text-sm'>
  <div className='flex-shrink-0 mr-3'>
    <img
      className='w-12 h-12 rounded-full object-cover bg-gray-200'
      src={user.profilePicture}
      alt={user.username}
    />
  </div>
  <div className='flex-1'>
    <div className='flex items-center mb-1'>
      <span className='font-semibold mr-1 text-sm truncate text-gray-900 dark:text-gray-100'>
        {user ? `@${user.username}` : 'anonymous user'}
      </span>
      <span className='text-gray-500 text-xs'>
        {moment(comment.createdAt).fromNow()}
      </span>
    </div>
    {isEditing ? (
      <>
        <Textarea
          className='mb-2 border rounded-lg shadow-sm'
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
        <div className='flex justify-end gap-2 text-sm'>
          <Button
            type='button'
            size='sm'
            gradientDuoTone='purpleToBlue'
            onClick={handleSave}
            className='px-4 py-2'
          >
            Save
          </Button>
          <Button
            type='button'
            size='sm'
            gradientDuoTone='purpleToBlue'
            outline
            onClick={() => setIsEditing(false)}
            className='px-4 py-2'
          >
            Cancel
          </Button>
        </div>
      </>
    ) : (
      <>
        <p className='text-gray-800 dark:text-gray-200 pb-2'>{comment.content}</p>
        <div className='flex items-center pt-2 text-xs border-t border-gray-300 dark:border-gray-700 max-w-fit gap-2'>
          <button
            type='button'
            onClick={() => onLike(comment._id)}
            className={`flex items-center gap-1 text-gray-400 hover:text-blue-500 ${
              currentUser &&
              comment.likes.includes(currentUser._id) &&
              'text-blue-500'
            }`}
          >
            <FaThumbsUp className='text-sm' />
            <span>
              {comment.numberOfLikes > 0 &&
                comment.numberOfLikes +
                  ' ' +
                  (comment.numberOfLikes === 1 ? 'like' : 'likes')}
            </span>
          </button>
          {currentUser &&
            (currentUser._id === comment.userId || currentUser.isAdmin) && (
              <>
                <button
                  type='button'
                  onClick={handleEdit}
                  className='text-gray-400 hover:text-blue-500'
                >
                  Edit
                </button>
                <button
                  type='button'
                  onClick={() => onDelete(comment._id)}
                  className='text-gray-400 hover:text-red-500'
                >
                  Delete
                </button>
              </>
            )}
        </div>
      </>
    )}
  </div>
</div>

  );
}