import type { metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'

export const metadata: metadata = {
    title: 'lucas sobczak',
    description: 'lucas sobczak portfolio',
}

export default function rootlayout({
  children,
}: {
  children: react.reactnode
}) {
  return (
    <html lang="en">
        <body className="font-sans">
                <div className='bg-g1 flex flex-col min-h-screen'>
                    <Header/>
                    <main className='flex-grow-1'>
                        {children}
                    </main>
                    <Footer/>
                </div>
        </body>
    </html>
  )
}
