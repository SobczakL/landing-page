import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import './globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }: AppProps) {

    const url = useRouter()
    console.log(url)
    return (
        <div className='flex flex-col h-screen relative overflow-hidden'>
            <Header />
            <div className='h-full'>
                <Component {...pageProps} />
            </div>
            <Footer />
        </div>
    )
}
