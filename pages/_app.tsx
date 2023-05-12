import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Kanit } from "next/font/google"
import Navbar from '@/components/sideBar' 
import Layout from '@/components/Layout'
const kanit = Kanit({ weight:['400'], subsets:["latin", "thai"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${kanit.className}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
    )
}
