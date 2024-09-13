import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import Banner from '../components/Banner';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-blue-100 to-pink-100">
      <div className="flex flex-col gap-8 p-8 md:p-20 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold lg:text-7xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4 lg:mb-6 overflow-visible">
          Welcome to Gaurav's Blog
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed max-w-2xl">
          Explore a diverse range of content from sports, politics, business, to aid-related topics. Our blog offers comprehensive analysis and updates, tailored to your interests.
        </p>
        <Link
          to="/search"
          className="text-base sm:text-lg font-bold text-teal-600 hover:text-teal-400 transition-colors"
        >
          View all posts
        </Link>

        <Banner />

      </div>

      <div className="max-w-7xl mx-auto py-10 px-6 md:px-10">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-10 items-center">
            <h2 className="text-3xl font-bold text-center text-gray-900">Recent Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 6).map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className="text-lg text-teal-600 hover:text-teal-400 hover:underline font-bold transition-all"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
