import { findAllPosts } from '@/src/query/posts.query'

export default async function Test() {
  const data = await findAllPosts()
}
