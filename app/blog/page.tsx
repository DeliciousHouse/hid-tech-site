import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

type PostMeta = {
  title: string;
  date?: string;
  slug: string;
};

async function getPosts(): Promise<PostMeta[]> {
  const dir = path.join(process.cwd(), "content/blog");
  const files = await fs.readdir(dir);
  const mdx = files.filter((f: string) => f.endsWith(".mdx"));
  const posts = await Promise.all(
    mdx.map(async (file: string) => {
      const raw = await fs.readFile(path.join(dir, file), "utf8");
      const { data } = matter(raw);
      const date = data.date ? new Date(data.date).toISOString().slice(0, 10) : undefined;
      return {
        title: data.title || file.replace(/\.mdx$/, ""),
        date,
        slug: file.replace(/\.mdx$/, ""),
      };
    })
  );
  return posts.sort((a, b) => (a.date && b.date ? b.date.localeCompare(a.date) : 0));
}

export default async function BlogIndexPage() {
  const posts = await getPosts();
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-white">Blog</h1>
      <ul className="mt-6 space-y-3">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-md border border-[var(--border)] bg-[var(--card)] p-4">
            <a href={`/blog/${p.slug}`} className="text-white hover:underline">
              {p.title}
            </a>
            {p.date && <div className="text-xs text-[var(--muted)]">{p.date}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}


