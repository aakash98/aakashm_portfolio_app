import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar';
import '@/styles/styles.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <div className="layout">{children}</div>
)

export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  )
}
