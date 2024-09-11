import Image from 'next/image'
import hero from '@/assets/image.jpg'
import { TfiEmail } from 'react-icons/tfi'
import { BiCalendar, BiLocationPlus, BiPhone } from 'react-icons/bi'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs'

export default function Hero() {
  return (
    <>
      {/* Desktop version */}
      <section className='bg-black text-white text-center py-20 w-full rounded-2xl p-10 border border-gray-700 hidden md:block'>
        <Image
          src={hero}
          alt='MD Suweb Reza'
          className='w-fit h-fit rounded-lg mx-auto mb-6 '
        />
        <h1 className='text-xl font-bold mb-4'>MD Suweb Reza</h1>
        <p className='text-sm px-3 py-1 mb-6 bg-slate-600 rounded-lg w-fit flex text-center justify-center mx-auto'>
          Software Developer
        </p>

        {/* Desktop details */}
        <div className='border-t border-gray-700 py-3'>
          {/* Email */}
          <ul className='flex items-center space-x-2 py-4'>
            <li className='bg-slate-900 p-3 rounded-xl'>
              <TfiEmail className='text-white' />
            </li>
            <li className='text-sm truncate w-40'>
              <span className='font-extralight text-gray-700'>Email</span>
              <br />
              <span>swebreza@gmail.com</span>
            </li>
          </ul>
          {/* Phone */}
          <ul className='flex items-center space-x-2 py-4'>
            <li className='bg-slate-900 p-3 rounded-xl'>
              <BiPhone className='text-white' />
            </li>
            <li className='text-sm truncate w-40'>
              <span className='font-extralight text-gray-700'>Phone</span>
              <br />
              <span>+91 9538774092</span>
            </li>
          </ul>
          {/* DOB */}
          <ul className='flex items-center space-x-2 py-4'>
            <li className='bg-slate-900 p-3 rounded-xl'>
              <BiCalendar className='text-white' />
            </li>
            <li className='text-sm truncate w-40'>
              <span className='font-extralight text-gray-700'>DOB</span>
              <br />
              <span>30/11/2000</span>
            </li>
          </ul>
          {/* Location */}
          <ul className='flex items-center space-x-2 py-4'>
            <li className='bg-slate-900 p-3 rounded-xl'>
              <BiLocationPlus className='text-white' />
            </li>
            <li className='text-sm truncate w-40'>
              <span className='font-extralight text-gray-700'>Location</span>
              <br />
              <span>Bangalore</span>
            </li>
          </ul>

          {/* Social Media */}
          <ul className='flex items-center space-x-4 pt-4'>
            <li>
              <a
                href='https://www.linkedin.com/in/suwebreza/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-blue-600 transition-colors duration-300'
              >
                <BsLinkedin className='w-6 h-6' />
              </a>
            </li>
            <li>
              <a
                href='https://github.com/swebreza'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-gray-800 transition-colors duration-300'
              >
                <BsGithub className='w-6 h-6' />
              </a>
            </li>
            <li>
              <a
                href='https://x.com/SwebReza'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-blue-400 transition-colors duration-300'
              >
                <BsTwitterX className='w-6 h-6' />
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/suwebreza/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-pink-500 transition-colors duration-300'
              >
                <BsInstagram className='w-6 h-6' />
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Mobile version */}
      <section className='bg-black md:hidden text-white py-10 w-full rounded-2xl p-5 border border-gray-700'>
        <div className='grid grid-cols-6 items-center space-y-4 sm:space-y-0 sm:space-x-4'>
          {/* First Column - Image */}
          <div className='col-span-2'>
            <Image
              src={hero}
              alt='MD Suweb Reza'
              className='w-24 h-24 rounded-full'
            />
          </div>

          {/* Second Column - Details */}
          <div className='text-center sm:text-left col-span-4'>
            <h1 className='text-lg font-bold mb-2'>MD Suweb Reza</h1>
            <p className='text-xs px-3 py-1 mb-4 bg-slate-600 rounded-lg inline-block'>
              Software Developer
            </p>

            {/* Social Media Links */}
            <div className='flex space-x-4 pt-4 justify-center sm:justify-start'>
              <a
                href='https://www.linkedin.com/in/suwebreza/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-blue-600 transition-colors duration-300'
              >
                <BsLinkedin className='w-5 h-5' />
              </a>
              <a
                href='https://github.com/swebreza'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-gray-800 transition-colors duration-300'
              >
                <BsGithub className='w-5 h-5' />
              </a>
              <a
                href='https://x.com/SwebReza'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-blue-400 transition-colors duration-300'
              >
                <BsTwitterX className='w-5 h-5' />
              </a>
              <a
                href='https://www.instagram.com/suwebreza/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-pink-500 transition-colors duration-300'
              >
                <BsInstagram className='w-5 h-5' />
              </a>
            </div>
          </div>
        </div>
        {/* <div className='inline-flex'>
          <div className='flex items-center justify-center sm:justify-start space-x-2'>
            <TfiEmail className='text-white' />
            <span className='text-xs'>swebreza@gmail.com</span>
          </div>
          <div className='flex items-center justify-center sm:justify-start space-x-2'>
            <BiPhone className='text-white' />
            <span className='text-xs'>+91 9538774092</span>
          </div>
          <div className='flex items-center justify-center sm:justify-start space-x-2'>
            <BiCalendar className='text-white' />
            <span className='text-xs'>30/11/2000</span>
          </div>
          <div className='flex items-center justify-center sm:justify-start space-x-2'>
            <BiLocationPlus className='text-white' />
            <span className='text-xs'>Bangalore</span>
          </div>
        </div> */}
        <br />
        <div className='grid grid-cols-2 gap-3'>
          <div className='flex items-center justify-center sm:justify-start space-x-2'>
            <TfiEmail className='text-white' />
            <span className='text-xs'>swebreza@gmail.com</span>
          </div>
          <div className='flex items-center justify-center sm:justify-start space-x-2'>
            <BiPhone className='text-white' />
            <span className='text-xs'>+91 9538774092</span>
          </div>
          <div className='flex items-center justify-center sm:justify-start space-x-2'>
            <BiCalendar className='text-white' />
            <span className='text-xs'>30/11/2000</span>
          </div>
          <div className='flex items-center justify-center sm:justify-start space-x-2'>
            <BiLocationPlus className='text-white' />
            <span className='text-xs'>Bangalore</span>
          </div>
        </div>
      </section>
    </>
  )
}
