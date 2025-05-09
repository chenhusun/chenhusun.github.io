import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function Navbar() {
  return (
    <>
      <Script id="fix-nav-links" strategy="afterInteractive">
        {`
          document.addEventListener('DOMContentLoaded', function() {
            const baseUrl = window.BASE_URL || '';
            // 修复导航链接
            document.querySelectorAll('nav a').forEach(link => {
              const href = link.getAttribute('href');
              if (href && href.startsWith('/') && !href.startsWith('/blog') && !href.startsWith('//') && baseUrl) {
                link.setAttribute('href', baseUrl + href);
              }
            });
          });
        `}
      </Script>
      <nav className="border-b-2 border-[#008F11] bg-[#0D0208] py-4 sticky top-0 z-10 backdrop-blur-sm bg-opacity-80">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#00FF41] hover:text-[#008F11] transition-colors">
              <span className="font-mono">&lt;/&gt;</span> Cyber_Blog
            </Link>
          </div>
          
          <div>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-[#00FF41] hover:text-[#008F11] transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/posts" className="text-[#00FF41] hover:text-[#008F11] transition-colors">
                  文章
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#00FF41] hover:text-[#008F11] transition-colors">
                  关于
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
} 