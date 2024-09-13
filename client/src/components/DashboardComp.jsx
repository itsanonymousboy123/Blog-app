import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  HiAnnotation,
  HiArrowNarrowUp,
  HiDocumentText,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import { Button, Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function DashboardComp() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [lastMonthUsers, setLastMonthUsers] = useState(0);
  const [lastMonthPosts, setLastMonthPosts] = useState(0);
  const [lastMonthComments, setLastMonthComments] = useState(0);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/user/getusers?limit=5');
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          setTotalUsers(data.totalUsers);
          setLastMonthUsers(data.lastMonthUsers);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/post/getposts?limit=5');
        const data = await res.json();
        if (res.ok) {
          setPosts(data.posts);
          setTotalPosts(data.totalPosts);
          setLastMonthPosts(data.lastMonthPosts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchComments = async () => {
      try {
        const res = await fetch('/api/comment/getcomments?limit=5');
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          setTotalComments(data.totalComments);
          setLastMonthComments(data.lastMonthComments);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (currentUser.isAdmin) {
      fetchUsers();
      fetchPosts();
      fetchComments();
    }
  }, [currentUser]);

  return (
    <div className='p-6 md:mx-auto max-w-7xl'>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
        <div className='bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <div className='flex justify-between items-center'>
            <div>
              <h3 className='text-gray-600 dark:text-gray-400 text-sm uppercase font-semibold'>
                Total Users
              </h3>
              <p className='text-3xl font-bold'>{totalUsers}</p>
            </div>
            <HiOutlineUserGroup className='bg-teal-600 text-white rounded-full text-5xl p-3 shadow-lg' />
          </div>
          <div className='flex items-center mt-4 text-sm'>
            <span className='text-green-500 flex items-center'>
              <HiArrowNarrowUp />
              <span className='ml-1'>{lastMonthUsers}</span>
            </span>
            <span className='ml-2 text-gray-500'>Last month</span>
          </div>
        </div>

        <div className='bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <div className='flex justify-between items-center'>
            <div>
              <h3 className='text-gray-600 dark:text-gray-400 text-sm uppercase font-semibold'>
                Total Comments
              </h3>
              <p className='text-3xl font-bold'>{totalComments}</p>
            </div>
            <HiAnnotation className='bg-indigo-600 text-white rounded-full text-5xl p-3 shadow-lg' />
          </div>
          <div className='flex items-center mt-4 text-sm'>
            <span className='text-green-500 flex items-center'>
              <HiArrowNarrowUp />
              <span className='ml-1'>{lastMonthComments}</span>
            </span>
            <span className='ml-2 text-gray-500'>Last month</span>
          </div>
        </div>

        <div className='bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <div className='flex justify-between items-center'>
            <div>
              <h3 className='text-gray-600 dark:text-gray-400 text-sm uppercase font-semibold'>
                Total Posts
              </h3>
              <p className='text-3xl font-bold'>{totalPosts}</p>
            </div>
            <HiDocumentText className='bg-lime-600 text-white rounded-full text-5xl p-3 shadow-lg' />
          </div>
          <div className='flex items-center mt-4 text-sm'>
            <span className='text-green-500 flex items-center'>
              <HiArrowNarrowUp />
              <span className='ml-1'>{lastMonthPosts}</span>
            </span>
            <span className='ml-2 text-gray-500'>Last month</span>
          </div>
        </div>
      </div>

      <div className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-3'>
        <div className='bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-lg font-semibold text-gray-700 dark:text-gray-200'>
              Recent Users
            </h1>
            {/* <Button outline gradientDuoTone='purpleToPink'>
              <Link to={'/dashboard?tab=users'}>See all</Link>
            </Button> */}
          </div>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>User Image</Table.HeadCell>
              <Table.HeadCell>Username</Table.HeadCell>
            </Table.Head>
            {users &&
              users.map((user) => (
                <Table.Body key={user._id} className='divide-y'>
                  <Table.Row className='bg-white dark:bg-gray-700'>
                    <Table.Cell>
                      <img
                        src={user.profilePicture}
                        alt='user'
                        className='w-10 h-10 rounded-full bg-gray-500'
                      />
                    </Table.Cell>
                    <Table.Cell>{user.username}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
          </Table>
        </div>

        <div className='bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-lg font-semibold text-gray-700 dark:text-gray-200'>
              Recent Comments
            </h1>
            <Button outline gradientDuoTone='purpleToPink'>
              <Link to={'/dashboard?tab=comments'}>See all</Link>
            </Button>
          </div>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Comment Content</Table.HeadCell>
              <Table.HeadCell>Likes</Table.HeadCell>
            </Table.Head>
            {comments &&
              comments.map((comment) => (
                <Table.Body key={comment._id} className='divide-y'>
                  <Table.Row className='bg-white dark:bg-gray-700'>
                    <Table.Cell className='w-72'>
                      <p className='line-clamp-2 text-gray-700 dark:text-gray-300'>
                        {comment.content}
                      </p>
                    </Table.Cell>
                    <Table.Cell>{comment.numberOfLikes}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
          </Table>
        </div>

        <div className='bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-lg font-semibold text-gray-700 dark:text-gray-200'>
              Recent Posts
            </h1>
            <Button outline gradientDuoTone='purpleToPink'>
              <Link to={'/dashboard?tab=posts'}>See all</Link>
            </Button>
          </div>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Post Image</Table.HeadCell>
              <Table.HeadCell>Post Title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
            </Table.Head>
            {posts &&
              posts.map((post) => (
                <Table.Body key={post._id} className='divide-y'>
                  <Table.Row className='bg-white dark:bg-gray-700'>
                    <Table.Cell>
                      <img
                        src={post.coverImage}
                        alt='post'
                        className='w-10 h-10 object-cover'
                      />
                    </Table.Cell>
                    <Table.Cell>{post.title}</Table.Cell>
                    <Table.Cell>{post.category}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
          </Table>
        </div>
      </div>
    </div>
  );
}
