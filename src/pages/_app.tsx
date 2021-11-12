import Head from "next/head";
import {AppProps} from "next/dist/shared/lib/router/router";
import "@/styles";

const MyApp = ({Component, pageProps}: AppProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>My Top - наш лучший топ</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps} />
        </>)
}

export default MyApp;
