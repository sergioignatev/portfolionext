import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import './globals.css'
import Projects from './projects/page'
import SkillsLayout from './skills/layout'


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
     
     
        </body>
    </html>
  )
}
