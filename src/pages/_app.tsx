import Header from '@/components/layout/header/Header'
import './globals.css'
import type { AppProps } from 'next/app'
import Icon from '@/components/Icon'

export default function MyApp({ Component, pageProps }: AppProps) {

    return (
        <div className='relative flex flex-col h-screen max-w-[100%]'>
            <Header />
            <div className='flex-grow relative bg-current'>
                <Icon
                />
                <Component {...pageProps} />
            </div>
        </div>
    )
}
