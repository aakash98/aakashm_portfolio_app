'use client'
import './globals.css'
import Navbar from './Navbar';

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
      <body><Navbar></Navbar>{children}</body>

    </html>
  )
}
