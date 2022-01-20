import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../components/common/MainLayout' 
import Metahead from '../components/common/Metahead'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
    <Metahead />
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
      </>
  )
  

}

export default MyApp
