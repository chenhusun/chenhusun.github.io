import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
  htmlContent: string;
};

export type PostSlug = {
  params: {
    slug: string;
  }
};

export function getAllPostSlugs(): PostSlug[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    // 从文件名中移除 ".md" 获取 slug
    const slug = fileName.replace(/\.md$/, '');

    // 读取 markdown 文件内容
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 使用 gray-matter 解析文章的元数据
    const matterResult = matter(fileContents);

    // 使用 marked 将 Markdown 转换为 HTML
    const htmlContent = marked.parse(matterResult.content).toString();

    // 组合数据与 slug
    return {
      slug,
      content: matterResult.content,
      htmlContent,
      ...(matterResult.data as { title: string; date: string; description: string; tags: string[] })
    };
  });

  // 按日期排序
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): Post | undefined {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // 使用 gray-matter 解析文章的元数据
    const matterResult = matter(fileContents);
    
    // 使用 marked 将 Markdown 转换为 HTML
    const htmlContent = marked.parse(matterResult.content).toString();
    
    return {
      slug,
      content: matterResult.content,
      htmlContent,
      ...(matterResult.data as { title: string; date: string; description: string; tags: string[] })
    };
  } catch (error) {
    console.error(`Error fetching post with slug: ${slug}`, error);
    return undefined;
  }
} 