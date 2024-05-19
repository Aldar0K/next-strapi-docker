import { fetchPost } from '@/api/services/fetchPost';
import { fetchPosts } from '@/api/services/fetchPosts';
import { Viewer } from '@/components/viewer-server-api';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts?.map(post => ({ id: String(post.id) })) ?? [];
}

export default async function Post({ params }: { params: { id: string } }) {
  const post = await fetchPost(Number(params.id));

  if (!post) {
    return notFound();
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

      {/* TODO add form for adding comments (maybe just a list of messages for each email/name) */}
      {/* <Form /> */}

      {/* <Viewer postId={post.id} /> */}
      <Viewer postId={post.id} />
    </main>
  );
}
