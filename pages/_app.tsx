import { FC } from 'react'

import type { AppProps } from 'next/app'

import { Head } from '@components/common'

import { GlobalStyle } from '@styles/global.styles'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  return (
    <>
      <GlobalStyle />
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
