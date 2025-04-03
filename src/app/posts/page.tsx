import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export const metadata = {
  title: '所有文章 - Cyber Blog',
  description: '浏览所有博客文章',
};

export default function PostsPage() {
  const posts = getAllPosts();
  
  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-[#00FF41] mb-4">所有文章</h1>
        <div className="h-[2px] w-full bg-[#008F11]"></div>
      </header>
      
      <div className="grid grid-cols-1 gap-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))
        ) : (
          <div className="cyber-box p-8 text-center">
            <p className="text-[#00FF41] text-xl">暂无文章</p>
          </div>
        )}
      </div>
    </div>
  );
} 