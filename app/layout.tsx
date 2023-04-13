'use client'

import Footer from '@/components/footer';
import './globals.css'
import NavBar from '@/components/navBar'
import {Montserrat} from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <html lang="en" className={`bg-light ${montserrat.variable} font-mont`}>
      <head>
        <title>Vatsaal | Software Developer</title>
        <meta name="description" content="I’m a software developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className=''>
        <NavBar/>
        <main className='w-full h-full inline-block z-0 bg-light px-32'>
          <AnimatePresence key={pathname}>
            {children}
          </AnimatePresence>
        </main>
      </body>
      <Footer/>
    </html>
  )
}
