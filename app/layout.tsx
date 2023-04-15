'use client'

import Footer from '@/components/footer';
import './globals.css'
import NavBar from '@/components/navBar'
import {Montserrat} from 'next/font/google';
import useThemeSwitcher from '@/components/hooks/useThemeSwitcher';
import { BsFillSunFill } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const {darkMode, setDarkMode} = useThemeSwitcher();
  
  return (
    
      <html lang="en" className={`bg-light ${montserrat.variable} font-mont dark:bg-dark`}>
        <head>
          <title>Vatsaal | Software Developer</title>
          <meta name="description" content="I’m a software developer specializing in building (and occasionally designing) exceptional digital experiences." />
          <link rel="icon" href="./favicon.ico" />
        </head>
        <body className='bg-light dark:bg-dark'>
            <NavBar/>
            <main className='w-full min-h-screen inline-block z-0 bg-light px-32 dark:bg-dark'>
                {children}
            </main>
            <div className='fixed z-90 bottom-10 right-8 bg-light w-[42px] h-[42px] p-1 rounded-full drop-shadow-lg flex justify-center items-center text-light text-4xl hover:bg-indigo-500 shadow-lg hover:drop-shadow-2xl hover:scale-110 hover:-translate-y-2 duration-100 transition-all ease-in-out dark:bg-dark dark:hover:bg-indigo-500 cursor-pointer' onClick={() => {
                            let check = darkMode === "light" ? "dark": "light";
                            setDarkMode(check);
                }}
                >
              {
                darkMode === "dark" ? <BsFillSunFill className="w-9 h-9 text-dark dark:text-light"/> : <MdDarkMode className="w-9 h-9 text-dark dark:text-light"/>
              }
            </div>
        </body>
        <Footer/>
      </html>
  )
}
