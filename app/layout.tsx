import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Сергей Игнатьев',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`relative`}>
        <Nav/>
        <main className=''>{children}</main>
    <Footer/>
    <Footer/>
        </body>
    </html>
  )
}
