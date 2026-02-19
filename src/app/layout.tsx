import type { Metadata } from 'next'
import { StoreProvider } from '@/app/StoreProvider'

export const metadata: Metadata = {
  title: 'Andrei Lopatin',
  description: 'Andrei Lopatin, Senior Frontend Developer, Engineer',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <StoreProvider>
      <html lang="en">
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/16x16.png"
        />
        <link rel="manifest" href="manifest.json" />
        <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
          {children}
        </body>
      </html>
    </StoreProvider>
  )
}
