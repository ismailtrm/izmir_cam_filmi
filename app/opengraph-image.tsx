import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'KAR PLUS - İzmir Cam Filmi, Bina Cam Filmi ve Boya Koruma Filmi';
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
          background: 'linear-gradient(to right, #14182f, #000)',
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
          KAR PLUS
        </div>
        <div style={{ fontSize: '32px', color: '#f3f4f6' }}>
          OTO CAM FİLMİ - BİNA CAM FİLMİ
        </div>
        <div style={{ fontSize: '28px', color: '#e5e7eb', marginTop: '16px' }}>
          GÜVENLİK FİLMİ - BOYA KORUMA FİLMİ
        </div>
        <div style={{ fontSize: '24px', color: '#e5e7eb', marginTop: '32px' }}>
          0545 820 70 84
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 