import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nicholas Aigberua - Portfolio',
    short_name: 'Portfolio',
    description: 'Lead Software Engineer specializing in backend systems, REST APIs, and cloud infrastructure.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
