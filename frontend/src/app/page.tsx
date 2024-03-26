import Image from 'next/image';

const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

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

export default async function Home() {
  const response = await fetch(`${API_URL}/api/posts?populate=cover`, {
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

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>hello</h1>
      <ul>
        {posts.data.map(post => (
          <li key={post.id}>
            <h3 className='text-xl'>{post.attributes.title}</h3>
            <p className='text-sm'>{post.attributes.description}</p>
            <Image
              src={post.attributes.cover.data.attributes.url}
              alt={post.attributes.cover.data.attributes.alternativeText || post.attributes.title}
              width={post.attributes.cover.data.attributes.width}
              height={post.attributes.cover.data.attributes.height}
              className='my-4 max-w-[300px] w-full h-auto'
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
