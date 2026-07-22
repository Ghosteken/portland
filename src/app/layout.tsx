import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PageTransition } from '@/components/layout/page-transition'
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ghosteken.vercel.app'),
  title: {
    default: 'Nicholas Aigberua | Lead Software Engineer',
    template: '%s | Nicholas Aigberua'
  },
  description: 'Lead Software Engineer specializing in backend systems, REST APIs, and cloud infrastructure (AWS, Azure). Portfolio of Nicholas Aigberua.',
  keywords: ['Software Engineer', 'Backend Developer', 'Node.js', 'TypeScript', 'C#', '.NET', 'NestJS', 'AWS', 'Azure', 'REST APIs', 'Lagos', 'Nigeria'],
  authors: [{ name: 'Nicholas Aigberua' }],
  creator: 'Nicholas Aigberua',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ghosteken.vercel.app',
    title: 'Nicholas Aigberua | Lead Software Engineer',
    description: 'Lead Software Engineer specializing in backend systems, REST APIs, and cloud infrastructure (AWS, Azure).',
    siteName: 'Nicholas Aigberua Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicholas Aigberua | Lead Software Engineer',
    description: 'Lead Software Engineer specializing in backend systems, REST APIs, and cloud infrastructure (AWS, Azure).',
    creator: '@Ghosteken',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
