export const metadata = {
  title: '关于 - Cyber Blog',
  description: '了解更多关于这个赛博朋克风格博客的信息',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-[#00FF41] mb-4">关于本站</h1>
        <div className="h-[2px] w-full bg-[#008F11]"></div>
      </header>
      
      <div className="cyber-box mb-8">
        <h2 className="text-2xl font-bold text-[#00FF41] mb-4">博客简介</h2>
        <p className="text-[#00FF41] mb-4">
          这是一个使用Next.js构建的静态博客，支持Markdown编写文章，托管在GitHub Pages上。
          博客采用赛博朋克风格设计，致力于分享技术、艺术和数字文化的内容。
        </p>
        <p className="text-[#00FF41] mb-4">
          在这个数字化的世界里，我们将探索技术、艺术和未来的无限可能。
        </p>
      </div>
      
      <div className="cyber-box mb-8">
        <h2 className="text-2xl font-bold text-[#00FF41] mb-4">技术栈</h2>
        <ul className="list-disc pl-6 text-[#00FF41]">
          <li className="mb-2">Next.js - React框架</li>
          <li className="mb-2">Tailwind CSS - 样式库</li>
          <li className="mb-2">Markdown - 内容创作</li>
          <li className="mb-2">GitHub Pages - 静态托管</li>
        </ul>
      </div>
      
      <div className="cyber-box">
        <h2 className="text-2xl font-bold text-[#00FF41] mb-4">联系方式</h2>
        <p className="text-[#00FF41] mb-4">
          如果您有任何问题或建议，可以通过以下方式联系我：
        </p>
        <ul className="text-[#00FF41]">
          <li className="mb-2">
            <span className="text-[#008F11]">GitHub:</span> 
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="ml-2 text-[#00FF41] hover:text-[#008F11] transition-colors">
              @yourusername
            </a>
          </li>
          <li className="mb-2">
            <span className="text-[#008F11]">Email:</span> 
            <a href="mailto:your.email@example.com" className="ml-2 text-[#00FF41] hover:text-[#008F11] transition-colors">
              your.email@example.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
} 