import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1A1A2E',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            fontFamily: 'sans-serif',
            fontWeight: 900,
            fontSize: 18,
            letterSpacing: '-1px',
          }}
        >
          <span style={{ color: '#F5F2EC' }}>T</span>
          <span style={{ color: '#2563EB' }}>F</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
