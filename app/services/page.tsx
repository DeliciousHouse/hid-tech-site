import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents, Prose } from "@/components/mdx";

export const dynamic = "force-static";

export default async function ServicesPage() {
  const file = await fs.readFile(path.join(process.cwd(), "content/pages/services.mdx"), "utf8");
  const { content } = matter(file);
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="prose prose-invert max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </div>
  );
}


