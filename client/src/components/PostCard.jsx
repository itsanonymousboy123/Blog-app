import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className="relative group w-full h-[400px] border border-teal-500 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl lg:w-[30%] sm:w-[430px]">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt="post cover"
          className="h-[260px] w-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
        />
      </Link>
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-gray-900 to-transparent">
        <p className="text-lg font-bold text-white line-clamp-2 transition-colors group-hover:text-teal-300">
          {post.title}
        </p>
        <span className="italic text-sm text-gray-300">{post.category}</span>
      </div>
      <Link
        to={`/post/${post.slug}`}
        className="absolute bottom-0 left-0 right-0 bg-teal-500 text-white border border-teal-500 rounded-t-lg m-2 py-2 text-center font-semibold transform translate-y-12 transition-transform duration-300 group-hover:translate-y-0"
      >
        Read Article
      </Link>
    </div>
  );
}
