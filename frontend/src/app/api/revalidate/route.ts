import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

const SECRET_TOKEN = process.env.SECRET_TOKEN || '1234';

export async function GET(request: NextRequest) {
  if (request.nextUrl.searchParams.get('secret') !== SECRET_TOKEN) {
    return new NextResponse(JSON.stringify({ error: 'Invalid token' }), {
      status: 401
    });
  }

  try {
    revalidatePath(request.nextUrl.searchParams.get('path') || '/');
    revalidateTag(request.nextUrl.searchParams.get('tag') || '/');
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    return NextResponse.json({
      revalidated: false,
      now: Date.now(),
      message: 'Error revalidating'
    });
  }
}
