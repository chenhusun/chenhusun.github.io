const fs = require('fs');
const path = require('path');

// 检测是否为本地环境
const isLocal = process.env.GITHUB_ACTIONS !== 'true';

// 仓库名称，需要匹配你的GitHub Pages设置
// 本地测试时不添加前缀，GitHub环境才使用/blog前缀
const BASE_PATH = isLocal ? '' : '/blog';

// 扫描目录中的所有HTML文件
function scanDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      scanDir(filePath); // 递归扫描子目录
    } else if (file.endsWith('.html')) {
      fixHtmlFile(filePath);
    }
  }
}

// 修复HTML文件中的资源路径
function fixHtmlFile(filePath) {
  console.log(`处理文件: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (isLocal) {
    // 本地测试环境时，移除所有/blog前缀
    content = content.replace(/["'](\/blog)?\/_next\//g, `"/_next/`);
    content = content.replace(/["'](\/blog)?\/favicon\.ico/g, `"/favicon.ico`);
  } else {
    // GitHub部署环境，添加/blog前缀
    content = content.replace(/["']\/_next\//g, `"${BASE_PATH}/_next/`);
    content = content.replace(/["']\/favicon\.ico/g, `"${BASE_PATH}/favicon.ico`);
  }
  
  // 写回文件
  fs.writeFileSync(filePath, content);
  console.log(`文件已修复: ${filePath}`);
}

// 开始处理
const outDir = path.join(__dirname, 'out');
console.log(`开始处理 ${outDir} 目录下的HTML文件...${isLocal ? '(本地环境)' : '(GitHub环境)'}`);
scanDir(outDir);
console.log('所有HTML文件路径修复完成!'); 