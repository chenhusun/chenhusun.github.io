import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="cyber-box p-8 text-center max-w-lg">
        <h1 className="text-4xl font-bold text-[#FF00FF] mb-6">
          <span className="animate-pulse inline-block">404</span>
        </h1>
        <h2 className="text-2xl font-bold text-[#00FF41] mb-6">系统错误: 页面未找到</h2>
        <div className="cyber-grid p-4 mb-6">
          <code className="text-[#00FF41] text-md mb-4">
            $ ERROR: 请求的资源未能在主机上定位。<br />
            $ 错误代码: 0x00000404<br />
            $ 建议操作: 返回主页并重新导航。
          </code>
        </div>
        <p className="text-[#00FF41] mb-8">
          你似乎进入了数字世界的虚无空间。这个页面不存在或已被删除。
        </p>
        <Link href="/" className="cyber-button">
          返回主网格 &larr;
        </Link>
      </div>
    </div>
  );
} 