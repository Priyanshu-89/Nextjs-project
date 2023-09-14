import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Navigation from '@/app/components/menu/Navigation'
import MenuBar from '@/app/components/menu/MenuBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Navigation/>
       {/* <MenuBar/> */}
        
        {children}</body>
    </html>
  )
}
