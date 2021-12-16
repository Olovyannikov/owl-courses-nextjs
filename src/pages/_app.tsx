import "@/styles";
import React from "react";
import Head from "next/head";
import ym from 'react-yandex-metrika';
import {YMInitializer} from "react-yandex-metrika";
import {AppProps} from "next/dist/shared/lib/router/router";

const MyApp = ({Component, pageProps, router}: AppProps): JSX.Element => {

    router.events.on('routeChangeComplete', (url: string) => {
        if (typeof window !== 'undefined') {
            ym('hit', url);
        }
    });

    return (
        <>
            <Head>
                <title>MyTop - наш лучший топ</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://mc.yandex.ru"/>
                <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}/>
                <meta property="og:locale" content="ru_RU"/>
            </Head>
            <YMInitializer
                version="2"
                accounts={[]}
                options={{webvisor: true, defer: true}}
            />
            <Component {...pageProps} />
        </>)
}

export default MyApp;
