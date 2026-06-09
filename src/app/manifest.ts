import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Costa Devices Global',
    short_name: 'Costa Devices',
    description: 'Mission-critical circuit protection and algorithmic component sourcing.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1AAF5D',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      }
    ],
  }
}
