import Head from 'next/head';

import GlobalStyle from '../styles/globals.styled';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        />
        <meta name='description' content='Start-up Tasks' />
        <meta name='keywords' content='start up tasks' />
        <title>Start-up Tasks</title>

        <meta name='theme-color' content='#ffffff' />
      </Head>

      <>
        <GlobalStyle />

        <Component {...pageProps} />
      </>
    </>
  );
}

export default MyApp;
