/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') ?? 'Global Supply Chain Solutions';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #e5e7eb 2%, transparent 0%), radial-gradient(circle at 75px 75px, #e5e7eb 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 40,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', fontSize: 40, fontWeight: 800, color: '#111' }}>
              Costa<span style={{ color: '#1AAF5D', marginLeft: 10 }}>Devices.</span>
            </div>
          </div>
          <div
            style={{
              fontSize: 60,
              fontWeight: 900,
              letterSpacing: '-0.05em',
              color: '#111111',
              textAlign: 'center',
              padding: '0 120px',
              lineHeight: 1.1,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 40,
              fontSize: 24,
              color: '#666666',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Mission-Critical Procurement
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
