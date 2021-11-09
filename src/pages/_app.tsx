import {AppProps} from "next/dist/shared/lib/router/router";
import '../client/resources/styles/style.scss';

const MyApp = ({Component, pageProps} : AppProps): JSX.Element => {
    return <Component {...pageProps} />
}

export default MyApp;
