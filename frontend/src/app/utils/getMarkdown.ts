import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';

export async function getMarkdownData(filePath: string): Promise<string> {
  const res = await fetch(filePath);
  const fileContents = await res.text();

  const processedContent = await remark()
    .use(html)
    .process(fileContents);

  return processedContent.toString();
}