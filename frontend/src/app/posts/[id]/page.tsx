'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:1337';
const API_TOKEN =
  'bac09f983a48e9a045a53022ccaa999794edb34300861a51d2d4dce952c2bc5d6727cc9d6e5b5e3ec794c4efd7ffce8625324f5cba33eb2c7b7d12b98a715979d5f3ab22609afd31ec114d8d55b4b9ae5c7f341e5fb9cae4217e7c025739fd186fc42600562a970ae6358e154ec24f37191872806ec4ffc5a104983890248eb1';

type Post = {
  id: number;
  attributes: {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: {
      data: any;
    };
  };
};

const fetchPost = async (id: number) => {
  const response = await fetch(`${API_URL}/api/posts?filters[id][$eq]=${id}&populate=cover`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`
    },
    next: {
      tags: ['posts']
    }
  });
  const posts = (await response.json()) as {
    data: Post[];
    meta: any;
  };
  const post = posts.data[0];
  return post;
};

const addView = async (id: number) => {
  await fetch(`${API_URL}/api/posts/${id}/add-view`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`
    },
    method: 'PATCH'
  });
  return 'ok';
};

export default function Home() {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetchPost(1).then(setPost);
    addView(1).then(() => console.log('view added'));
  }, []);

  if (!post) {
    return null;
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h3 className='text-xl'>{post.attributes.title}</h3>
      <p className='text-sm'>{post.attributes.description}</p>
      <Image
        src={post.attributes.cover.data.attributes.url}
        alt={post.attributes.cover.data.attributes.alternativeText || post.attributes.title}
        width={post.attributes.cover.data.attributes.width}
        height={post.attributes.cover.data.attributes.height}
        className='my-4 max-w-[300px] w-full h-auto'
      />
    </main>
  );
}
