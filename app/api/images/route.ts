// app/api/images/route.ts
import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const folder = searchParams.get('folder') || '';
console.log("folder selected:", folder);
    const blobs = await list({ prefix: folder });
    const urls = blobs.blobs.map(blob => blob.url);
console.log("URLs fetched:", urls.length);
   return NextResponse.json(urls);
  } catch (error) {
    console.error('Error fetching blob list:', error);
    return NextResponse.json(
      { error: 'Failed to fetch images. Please try again later.' },
      { status: 500 }
    );
  }
}
