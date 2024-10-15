import { Metadata } from "next";

import Anchor from "@/components/ui/Anchor";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "UIX DEV : Blog",
  description: "Description de la page blog",
};

export default async function Blog({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  // const page = parseInt(searchParams?.page as string) || 1
  // const postsPerPage = 6
  // const skip = (page - 1) * postsPerPage

  // const countAllPosts = await getTotalPostCount()
  // const tags = await getTags()
  // const posts = await getPosts(page, postsPerPage, skip)
  return (
    <main className="container">
      <Anchor height={50} />
      {/* <Content
        tags={tags}
        posts={posts}
        postsPerPage={postsPerPage}
        countAllPosts={countAllPosts}
      /> */}
    </main>
  );
}
