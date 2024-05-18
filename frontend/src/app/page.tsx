import { fetchPosts } from '@/api/services/fetchPosts';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function Home() {
  const posts = await fetchPosts();

  if (!posts) {
    return notFound();
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>hello</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h3 className='text-xl'>{post.attributes.title}</h3>
              <p className='text-sm'>{post.attributes.description}</p>
              <Image
                src={post.attributes.cover.data.attributes.url}
                alt={post.attributes.cover.data.attributes.alternativeText || post.attributes.title}
                width={post.attributes.cover.data.attributes.width}
                height={post.attributes.cover.data.attributes.height}
                className='my-4 max-w-[300px] w-full h-auto'
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
