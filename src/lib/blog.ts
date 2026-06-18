import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostItem {
  slug: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  category: string;
}

export interface PostDetails extends PostItem {
  contentHtml: string;
}

// Get all posts sorted by date
export function getSortedPostsData(): PostItem[] {
  // Get file names under /posts
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        title: matterResult.data.title || '',
        summary: matterResult.data.summary || '',
        date: matterResult.data.date || '',
        author: matterResult.data.author || 'GeM Sahayak Team',
        category: matterResult.data.category || 'General',
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Get individual post data
export async function getPostData(slug: string): Promise<PostDetails | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use marked to convert markdown into HTML string
  const contentHtml = await marked.parse(matterResult.content);

  // Combine the data with the slug and html
  return {
    slug,
    contentHtml,
    title: matterResult.data.title || '',
    summary: matterResult.data.summary || '',
    date: matterResult.data.date || '',
    author: matterResult.data.author || 'GeM Sahayak Team',
    category: matterResult.data.category || 'General',
  };
}
