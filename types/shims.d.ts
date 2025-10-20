declare module "gray-matter" {
  const matter: any;
  export default matter;
}

declare module "next-mdx-remote/rsc" {
  export const MDXRemote: any;
}

declare module "node:fs/promises" {
  export const readFile: any;
  export const readdir: any;
}

declare module "node:path" {
  export const join: any;
}

declare const process: any;

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}


