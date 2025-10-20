import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents, Prose } from "@/components/mdx";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/blog");
  const files = await fs.readdir(dir);
  return files
    .filter((f: string) => f.endsWith(".mdx"))
    .map((f: string) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const file = await fs.readFile(path.join(process.cwd(), "content/blog", `${params.slug}.mdx`), "utf8");
  const { content, data } = matter(file);
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <article>
        <h1 className="text-2xl font-semibold text-white">{data.title || params.slug}</h1>
        {data.date && (
          <div className="mt-1 text-xs text-[var(--muted)]">
            {new Date(data.date).toISOString().slice(0, 10)}
          </div>
        )}
        <div className="mt-6 prose prose-invert max-w-none">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}


