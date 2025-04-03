import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.params.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: '文章未找到 - Cyber Blog',
      description: '找不到请求的文章',
    };
  }
  
  return {
    title: `${post.title} - Cyber Blog`,
    description: post.description,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="max-w-3xl mx-auto">
      <Link 
        href="/posts" 
        className="inline-block mb-6 text-[#008F11] hover:text-[#00FF41] transition-colors"
      >
        &larr; 返回文章列表
      </Link>
      
      <article className="cyber-box mb-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#00FF41] mb-4">{post.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map(tag => (
              <span 
                key={tag} 
                className="text-xs border border-[#008F11] px-2 py-1 rounded-sm text-[#00FF41]"
              >
                {tag}
              </span>
            ))}
          </div>
          <time className="text-[#008F11] text-sm">{post.date}</time>
        </header>
        
        <div 
          className="prose prose-lg max-w-none" 
          dangerouslySetInnerHTML={{ __html: post.htmlContent }} 
        />
      </article>
    </div>
  );
} 