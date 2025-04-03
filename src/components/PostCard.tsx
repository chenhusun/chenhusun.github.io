import React from 'react';
import Link from 'next/link';
import { Post } from '@/lib/posts';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="cyber-box mb-6 transform transition-transform hover:scale-[1.02]">
      <div className="p-2">
        <h2 className="text-[#00FF41] text-xl font-bold mb-2">
          <Link href={`/posts/${post.slug}`} className="hover:text-[#008F11] transition-colors">
            {post.title}
          </Link>
        </h2>
        <div className="flex gap-2 mb-2">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs border border-[#008F11] px-2 py-1 rounded-sm text-[#00FF41]">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-[#008F11] text-sm mb-4">{post.date}</p>
        <p className="text-[#00FF41] mb-4">{post.description}</p>
        <Link 
          href={`/posts/${post.slug}`} 
          className="cyber-button inline-block"
        >
          读取更多 &raquo;
        </Link>
      </div>
    </div>
  );
} 