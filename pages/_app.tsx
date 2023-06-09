import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Kanit } from "next/font/google" 
import Layout from '@/components/Layout'
import Footer from '@/components/footer'
const kanit = Kanit({ weight:['400'], subsets:["latin", "thai"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${kanit.className}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer/>
    </main>
    )
}
