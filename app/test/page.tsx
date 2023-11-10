import { getAllPosts } from "@/src/query/posts.query";

export default async function Test() {
    const data = await getAllPosts()
    console.log(data);
}
