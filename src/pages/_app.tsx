import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import './globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Icon from '@/components/Icon'
import { useEffect, useState } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {

    const router = useRouter()
    const [currentPage, setCurrentPage] = useState(router.pathname)
    const [isLoading, setIsLoading] = useState(false)

    const handleNavigation = (loading: boolean) => {
        setIsLoading(loading);
    };

    useEffect(() => {
        const handleRouteChangeStart = (url: string) => {
            setCurrentPage(url)
        };
        router.events.on('routeChangeStart', handleRouteChangeStart)

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart)
        }
    }, [router]);

    return (
        <div className='flex flex-col h-screen relative overflow-hidden cursor-default'>
            <Header />
            <div className='h-full relative bg-current'>
                <Icon
                    currentPage={currentPage}
                />
                <Component {...pageProps} />
            </div>
            <Footer onNavigation={handleNavigation} />
        </div>
    )
}
