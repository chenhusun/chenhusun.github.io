import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#008F11] bg-[#0D0208] py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-[#00FF41] mb-2">
            &copy; {new Date().getFullYear()} Cyber_Blog. All Rights Reserved.
          </p>
          <p className="text-[#008F11] text-sm">
            <span className="inline-block mx-1">&lt;/&gt;</span>
            基于 Next.js 构建，托管于 GitHub Pages.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#00FF41] hover:text-[#008F11] transition-colors">
              GitHub
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#00FF41] hover:text-[#008F11] transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 