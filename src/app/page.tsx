import About from '@/components/About'
import Contact from '@/components/Contact'
// import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='w-full max-w-2xl lg:max-w-7xl'>
        <Head>
          <title>MD Suweb Reza | Portfolio</title>
        </Head>
        <main className='grid grid-cols-1 md:grid-cols-5 md:gap-5'>
          <Hero />
          <div className='col-span-4'>
            <About />
            <Projects />
            <Contact />
          </div>
        </main>
      </div>
    </div>
  )
}
