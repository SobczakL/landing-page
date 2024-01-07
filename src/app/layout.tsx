import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'

export const metadata: Metadata = {
    title: 'lucas sobczak',
    description: 'lucas sobczak portfolio',
}

export default function rootlayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className='bg-g1 flex flex-col h-dvh'>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
