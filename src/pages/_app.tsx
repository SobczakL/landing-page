import Header from '@/components/layout/header/Header'
import './globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Icon from '@/components/Icon'
import { useEffect, useState } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {

    return (
        <div className='relative flex flex-col h-screen'>
            <Header />
            <div className='h-full relative bg-current'>
                <Icon
                />
                <Component {...pageProps} />
            </div>
        </div>
    )
}
