import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';

export async function getMarkdownData(filePath: string): Promise<string> {
  // const fullPath = path.join(process.cwd(), filePath);
  // const fileContents = fs.readFileSync(fullPath, 'utf8');

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}${filePath}`);
  const fileContents = await res.text();

  const processedContent = await remark()
    .use(html)
    .process(fileContents);

  return processedContent.toString();
}