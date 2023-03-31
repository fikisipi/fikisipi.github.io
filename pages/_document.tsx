import { Html, Head, Main, NextScript } from 'next/document'
import { Header, Footer } from './index'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <div className={`min-h-[100vh] text-white `}>

        <Header/>
        <Main />
        <Footer/>
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
