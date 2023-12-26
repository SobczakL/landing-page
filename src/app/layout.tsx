import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Lucas Sobczak',
    description: 'Lucas Sobczak Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
                <div className='bg-g1 text-black min-h-screen relative'>
                    <Header/>
                    {children}
                    <Footer/>
                </div>
        </body>
    </html>
  )
}
