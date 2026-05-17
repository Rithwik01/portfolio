import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rithwik Kamalesh — Data Scientist & ML Engineer',
  description:
    'MS Computer Science (AI/ML) candidate at Georgia Tech. Data Scientist specializing in machine learning, NLP, computer vision, and full-stack AI systems. Currently at Roamio.ai.',
  keywords: [
    'Rithwik Kamalesh',
    'Data Scientist',
    'Machine Learning Engineer',
    'Georgia Tech',
    'AI Engineer',
    'Portfolio',
    'Python',
    'Deep Learning',
    'NLP',
  ],
  authors: [{ name: 'Rithwik Kamalesh' }],
  creator: 'Rithwik Kamalesh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rithwikkamalesh.dev',
    title: 'Rithwik Kamalesh — Data Analyst & Data Scientist',
    description:
      'MS CS (AI/ML) @ Georgia Tech. Building intelligent systems at the intersection of data, ML, and software.',
    siteName: 'Rithwik Kamalesh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rithwik Kamalesh — Data Scientist & ML Engineer',
    description: 'MS CS (AI/ML) @ Georgia Tech. Building intelligent systems.',
    creator: '@rithwik',
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
