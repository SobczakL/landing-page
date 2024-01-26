import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import './globals.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {

    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            <Header />
            <div className='h-full'>
                <Component {...pageProps} />
            </div>
            <Footer />
        </div>
    )
}
