import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';
import serverPath from './serverPath';

export async function getMarkdownData(filePath: string): Promise<string> {
  const fullPath = serverPath(filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const processedContent = await remark()
    .use(html)
    .process(fileContents);

  return processedContent.toString();
}