import '../styles.css'
import Head from "next/head";
import {useEffect} from "react";


function MyApp({Component, pageProps}) {
    function adaptViewport() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    useEffect(() => {
        adaptViewport()
        window.addEventListener('resize', adaptViewport);
    }, [])

    return <div className="app-container">
        <Head>
            <title>VEO</title>
            <link rel="icon" href="/images/altdarklogo.svg" />
        </Head>
        <Component {...pageProps} />
    </div>
}

export default MyApp
