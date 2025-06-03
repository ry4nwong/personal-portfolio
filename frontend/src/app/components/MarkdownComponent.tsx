import { getMarkdownData } from '../utils/getMarkdown';

export default async function MarkdownComponent({ url }: { url: string }) {
  // const description = await getMarkdownData(url);
  const res = await fetch(url);
  const description = await res.text();

  return (
    <article
      className="prose"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
}