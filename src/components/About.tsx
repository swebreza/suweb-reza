'use client'

import { BiGame } from 'react-icons/bi'
import { FaFigma } from 'react-icons/fa'
import { MdDeveloperBoard, MdDeveloperMode } from 'react-icons/md'
export default function About() {
  return (
    <section id='about' className='p-10 bg-black rounded-2xl w-full'>
      <h2 className='text-4xl font-bold text-white'>About Me</h2>
      <span className='px-2 mb-6 bg-slate-800 text-gray-800 rounded-full'>
        -----------
      </span>
      <p className='text-sm font-thin w-full text-gray-300'>
        <br />
        I’m MD Suweb Reza, a Software Developer specializing in innovative
        solutions.
        <br />
        <br />
        At JoboxHire Pvt. Ltd., I lead a team and develop technologies with the
        T3 Stack. I have a B.E. in Computer Science from Acharya Institute of
        Technology and experience with TypeScript, SQL, React.js, and Tailwind
        CSS. Previously, I improved system efficiency at Japan Grab Technology
        and mentored junior developers. I’m passionate about problem-solving and
        enhancing user experiences.
      </p>
      <br />
      <div>
        <h2 className='text-2xl font-bold text-white pb-5'>What I’m doing?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='flex items-center p-4 bg-black border border-gray-700 shadow-md rounded-lg max-w-sm'>
            {/* Image Section */}
            <div className='  '>
              {/* <Image
                src={images}
                alt='Description'
                className='object-cover w-fit h-fit'
                // width={64}
                // height={64}
              /> */}
              <FaFigma className='text-4xl text-white ' />
            </div>

            {/* Content Section */}
            <div className='ml-4'>
              <h3 className='text-xl font-semibold text-white'>Web design</h3>
              <p className=' mt-1'>
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </div>
          <div className='flex items-center p-4 bg-black border border-gray-700 shadow-md rounded-lg max-w-sm'>
            {/* Image Section */}
            <div className='  '>
              {/* <Image
                src={images}
                alt='Description'
                className='object-cover w-fit h-fit'
                // width={64}
                // height={64}
              /> */}
              <MdDeveloperBoard className='text-4xl text-white ' />
            </div>

            {/* Content Section */}
            <div className='ml-4'>
              <h3 className='text-xl font-semibold text-white'>
                Web development
              </h3>
              <p className=' mt-1'>
                High-quality development of sites at the professional level.
              </p>
            </div>
          </div>
          <div className='flex items-center p-4 bg-black border border-gray-700 shadow-md rounded-lg max-w-sm'>
            {/* Image Section */}
            <div className='  '>
              {/* <Image
                src={images}
                alt='Description'
                className='object-cover w-fit h-fit'
                // width={64}
                // height={64}
              /> */}
              <MdDeveloperMode className='text-4xl text-white ' />
            </div>

            {/* Content Section */}
            <div className='ml-4'>
              <h3 className='text-xl font-semibold text-white'>
                Mobile apps development
              </h3>
              <p className=' mt-1'>
                Professional development of applications for Android.
              </p>
            </div>
          </div>
          <div className='flex items-center p-4 bg-black border border-gray-700 shadow-md rounded-lg max-w-sm'>
            {/* Image Section */}
            <div className='  '>
              {/* <Image
                src={images}
                alt='Description'
                className='object-cover w-fit h-fit'
                // width={64}
                // height={64}
              /> */}
              <BiGame className='text-4xl text-white ' />
            </div>

            {/* Content Section */}
            <div className='ml-4'>
              <h3 className='text-xl font-semibold text-white'>Gaming</h3>
              <p className='font-extralight mt-1'>
                Played games like PUBG, God of war, and Call of Duty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
