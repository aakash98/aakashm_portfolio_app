import './globals.css'
import '@/styles/styles.css'

export const metadata = {
  title: 'KJ Next App',
  description: 'My next app sandbox',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (      
    <html lang="en">
      <body>{children}</body>

    </html>
  )
}
