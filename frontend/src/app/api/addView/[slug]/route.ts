import { NextResponse } from 'next/server';

type ResponseData = {
  message: string;
};

export async function PATCH(request: Request, { params }: { params: { slug: string } }) {
  const postId = params.slug;

  try {
    await fetch(`${process.env.API_URL}/api/posts/${postId}/add-view`, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      },
      method: 'PATCH'
    });
    return NextResponse.json({ message: 'Success' });
  } catch (error) {
    return NextResponse.json({ message: 'Error' });
  }
}
