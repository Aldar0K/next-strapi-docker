import type { Post } from '@/models/post';

export const fetchPosts = async (): Promise<Post[] | null> => {
  const response = await fetch(`${process.env.API_URL}/api/posts?populate=cover`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    },
    next: {
      tags: ['posts']
    }
  });
  const { data: posts } = (await response.json()) as {
    data: Post[];
    meta: any;
  };
  return posts ?? null;
};
