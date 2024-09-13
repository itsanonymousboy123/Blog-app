import { Sidebar } from 'flowbite-react';
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function DashSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Sidebar className='w-full md:w-56 bg-gray-800 text-white shadow-lg rounded-lg'>
      <Sidebar.Items>
        <Sidebar.ItemGroup className='flex flex-col gap-1 p-4'>
          {currentUser && currentUser.isAdmin && (
            <Link to='/dashboard?tab=dash'>
              <Sidebar.Item
                active={tab === 'dash' || !tab}
                icon={HiChartPie}
                as='div'
                className={`p-3 rounded-md transition-colors duration-200 ${
                  tab === 'dash' || !tab
                    ? 'bg-gray-700 text-blue-500'
                    : 'hover:bg-gray-700'
                }`}
              >
                Dashboard
              </Sidebar.Item>
            </Link>
          )}
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item
              active={tab === 'profile'}
              icon={HiUser}
              label={currentUser.isAdmin ? 'Admin' : 'User'}
              labelColor='dark'
              as='div'
              className={`p-3 rounded-md transition-colors duration-200 ${
                tab === 'profile'
                  ? 'bg-gray-700 text-blue-500'
                  : 'hover:bg-gray-700'
              }`}
            >
              Profile
            </Sidebar.Item>
          </Link>
          {currentUser.isAdmin && (
            <Link to='/dashboard?tab=posts'>
              <Sidebar.Item
                active={tab === 'posts'}
                icon={HiDocumentText}
                as='div'
                className={`p-3 rounded-md transition-colors duration-200 ${
                  tab === 'posts'
                    ? 'bg-gray-700 text-blue-500'
                    : 'hover:bg-gray-700'
                }`}
              >
                Posts
              </Sidebar.Item>
            </Link>
          )}
          {currentUser.isAdmin && (
            <>
              {/* <Link to='/dashboard?tab=users'>
                <Sidebar.Item
                  active={tab === 'users'}
                  icon={HiOutlineUserGroup}
                  as='div'
                  className={`p-3 rounded-md transition-colors duration-200 ${
                    tab === 'users'
                      ? 'bg-gray-700 text-blue-500'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  Users
                </Sidebar.Item>
              </Link> */}
              <Link to='/dashboard?tab=comments'>
                <Sidebar.Item
                  active={tab === 'comments'}
                  icon={HiAnnotation}
                  as='div'
                  className={`p-3 rounded-md transition-colors duration-200 ${
                    tab === 'comments'
                      ? 'bg-gray-700 text-blue-500'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  Comments
                </Sidebar.Item>
              </Link>
            </>
          )}
          <Sidebar.Item
            icon={HiArrowSmRight}
            className='p-3 mt-auto cursor-pointer rounded-md hover:bg-red-600 transition-colors duration-200'
            onClick={handleSignout}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
