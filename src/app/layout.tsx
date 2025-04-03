import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Cyber Blog - 赛博风格博客",
  description: "一个赛博朋克风格的个人博客",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <head>
        <Script id="base-path" strategy="beforeInteractive">
          {`
            // 设置全局BASE_URL变量，用于客户端路由
            window.BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
              ? '' 
              : '/blog';
            console.log('BASE_URL set to:', window.BASE_URL);
          `}
        </Script>
        <Script id="spa-routing" strategy="beforeInteractive">
          {`
            (function() {
              // 检查是否有重定向请求
              const redirect = sessionStorage.getItem('redirect');
              if (redirect) {
                sessionStorage.removeItem('redirect');
                // 只有当当前路径是主页时才进行重定向
                if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('/blog/')) {
                  const basePath = window.BASE_URL || '';
                  const newPath = window.location.pathname + redirect.replace(/^\\/+/, '');
                  history.replaceState(null, null, newPath);
                }
              }
            })();
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-cyber-black">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
