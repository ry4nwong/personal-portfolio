import { remark } from 'remark';
import html from 'remark-html';
import { headers } from 'next/headers';

export async function getMarkdownData(filePath: string): Promise<string> {
  // const fullPath = path.join(process.cwd(), filePath);
  // const fileContents = fs.readFileSync(fullPath, 'utf8');

  const h = await headers();
  const host = h.get('host');
  const protocol = host?.startsWith('localhost') ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;

  const res = await fetch(`${baseUrl}${filePath}`);
  const fileContents = await res.text();

  const processedContent = await remark()
    .use(html)
    .process(fileContents);

  console.log(baseUrl);

  return processedContent.toString();
}