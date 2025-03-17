import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'İzmir Cam Filmi - Royal Class Garage';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to right, #0F172A, #000)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
          padding: '48px',
        }}
      >
        <div style={{ fontSize: '64px', fontWeight: 'bold', marginBottom: '16px' }}>
          CAM FİLMİ
        </div>
        <div style={{ fontSize: '32px', color: '#f3f4f6' }}>
          ROYAL CLASS GARAGE
        </div>
        <div style={{ fontSize: '24px', color: '#e5e7eb', marginTop: '32px' }}>
          İzmir'in en kaliteli cam filmi uygulaması
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 