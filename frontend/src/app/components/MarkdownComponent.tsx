import { getMarkdownData } from "../utils/getMarkdown";

export default async function MarkdownComponent({ url }: { url: string }) {
    const description = await getMarkdownData(url);

    return (
        <article
            className="prose"
            dangerouslySetInnerHTML={{ __html: description }}
        />
    );
}