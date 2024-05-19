import type { NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

type ResponseData = {
  message: string;
};

export async function GET(request: NextRequest, response: NextApiResponse<ResponseData>) {
  try {
    return NextResponse.json({ message: 'Hello from Next.js!' });
  } catch (error) {
    return NextResponse.json({ message: 'Error occurred' });
  }
}
