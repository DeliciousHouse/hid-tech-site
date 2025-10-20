// no MDXRemoteProps in rsc typings; define a light components record instead
type MdxComponents = Record<string, (props: any) => JSX.Element>;

export const mdxComponents: MdxComponents = {
  h1: (props) => (
    <h1 {...props} className="mt-2 scroll-m-20 text-3xl font-bold tracking-tight text-white sm:text-4xl" />
  ),
  h2: (props) => (
    <h2 {...props} className="mt-10 scroll-m-20 text-2xl font-semibold tracking-tight text-white" />
  ),
  h3: (props) => (
    <h3 {...props} className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-white" />
  ),
  p: (props) => <p {...props} className="mt-4 text-[var(--muted)]" />,
  ul: (props) => <ul {...props} className="mt-4 list-disc space-y-2 pl-6 text-[var(--muted)]" />,
  ol: (props) => <ol {...props} className="mt-4 list-decimal space-y-2 pl-6 text-[var(--muted)]" />,
  a: (props) => <a {...props} className="text-blue-300 underline hover:text-blue-200" />,
  code: (props) => <code {...props} className="rounded bg-slate-900 px-1 py-0.5 text-[var(--muted)]" />,
  pre: (props) => (
    <pre {...props} className="overflow-auto rounded border border-[var(--border)] bg-slate-950 p-4 text-sm" />
  ),
};

export function Prose(props: any) {
  return <div className="prose prose-invert max-w-none">{props.children}</div>;
}


