import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default function Home() {
  const posts = getAllPosts();
  const featuredPosts = posts.slice(0, 3); // 显示最新的3篇文章
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* 英雄区 */}
      <section className="cyber-box mb-12 py-10 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#00FF41]">
          <span className="inline-block animate-pulse">Cyber_Blog</span>
        </h1>
        <p className="text-[#008F11] text-lg md:text-xl mb-6">
          探索数字世界的边缘，连接赛博空间的思想
        </p>
        <div className="cyber-grid p-4 inline-block">
          <code className="text-[#00FF41]">
            $ echo &ldquo;欢迎来到我的赛博世界...&rdquo;
          </code>
        </div>
      </section>

      {/* 最新文章 */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-[#00FF41]">最新文章</h2>
          <div className="h-[2px] flex-grow ml-4 bg-[#008F11]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      
      {/* 关于博客 */}
      <section className="cyber-box">
        <h2 className="text-2xl font-bold text-[#00FF41] mb-4">关于本站</h2>
        <p className="text-[#00FF41] mb-4">
          这是一个使用Next.js构建的静态博客，支持Markdown编写文章，托管在GitHub Pages上。
          博客采用赛博朋克风格设计，致力于分享技术、艺术和数字文化的内容。
        </p>
        <div className="flex space-x-4 mt-6">
          <Link 
            href="/posts" 
            className="cyber-button"
          >
            浏览全部文章
          </Link>
          <Link 
            href="/about" 
            className="cyber-button"
          >
            了解更多
          </Link>
        </div>
      </section>
    </div>
  );
}
