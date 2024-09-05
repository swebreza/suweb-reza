'use client'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
// import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [menu, setMenu] = useState(0)

  // Determine which component to render based on `menu` state
  const renderContent = () => {
    switch (menu) {
      case 0:
        return <About />
      case 1:
        return <Projects />
      case 2:
        return <Contact />
      default:
        return <About /> // Default case
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='w-full max-w-2xl lg:max-w-7xl'>
        <Head>
          <title>MD Suweb Reza | Portfolio</title>
        </Head>
        <main className='grid grid-cols-1 md:grid-cols-5 md:gap-5'>
          <Hero />
          <div className='col-span-4 rounded-2xl bg-black border border-gray-700'>
            <Header setMenu={setMenu} />
            {renderContent()} {/* Render the content based on `menu` state */}
          </div>
        </main>
      </div>
    </div>
  )
}
