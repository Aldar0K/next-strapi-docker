import { Post } from '@/models/post';

export const fetchPost = async (id: number): Promise<Post | null> => {
  const response = await fetch(
    `${process.env.API_URL}/api/posts?filters[id][$eq]=${id}&populate=cover`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      },
      next: {
        tags: ['posts']
      }
    }
  );
  const posts = (await response.json()) as {
    data: Post[];
    meta: any;
  };
  return posts.data[0] ?? null;
};
