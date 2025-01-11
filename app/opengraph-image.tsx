import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Dongwook Kim'

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          height: '100%',
          width: '100%',
          padding: 12
        }}
      >
        Dongwook Kim
      </div>
    ),
    {
      width: 1250,
      height: 600
    }
  )
}
