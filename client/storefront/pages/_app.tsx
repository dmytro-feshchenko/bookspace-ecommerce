// import '../styles/globals.less'
// // import '../styles/base.less'
// import type { AppProps } from 'next/app'
// import Layout from '../components/layout/layout'

import { FC } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'

import createEmotionCache from '../styles/createEmotionCache'
import theme from '../styles/theme'
import Layout from '../components/layout/layout'


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp: FC<AppProps> = ({ Component, pageProps, emotionCache = clientSideEmotionCache }) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Bookspace | Storefront</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );

  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
