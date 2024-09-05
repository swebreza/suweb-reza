import Image from 'next/image'
import hero from '@/assets/image.jpg'
import { TfiEmail } from 'react-icons/tfi'
import { BiCalendar, BiLocationPlus, BiPhone } from 'react-icons/bi'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs'
export default function Hero() {
  return (
    <section className='bg-black text-white text-center py-20 w-full rounded-2xl p-10 border border-gray-700'>
      <Image
        src={hero}
        alt='MD Suweb Reza'
        className='w-fit h-fit rounded-lg mx-auto mb-6 '
      />
      <h1 className='text-xl font-bold mb-4'>MD Suweb Reza</h1>
      <p className='text-sm px-3 py-1 mb-6 bg-slate-600 rounded-lg w-fit flex text-center justify-center'>
        Software Developer
      </p>
      <div className='border-t border-gray-700 py-3'>
        <ul className='flex items-center space-x-2 py-4'>
          <li className='bg-slate-900 p-3 rounded-xl '>
            <TfiEmail className='text-white' />
          </li>
          <li className='text-sm truncate w-40 overflow-hidden hover:overflow-visible hover:whitespace-normal'>
            <span className='font-extralight text-gray-700 float-left'>
              Email
            </span>
            <br />
            <span className='float-left'>swebreza@gmail.com</span>
          </li>
        </ul>
        <ul className='flex items-center space-x-2 py-4'>
          <li className='bg-slate-900 p-3 rounded-xl '>
            <BiPhone className='text-white' />
          </li>
          <li className='text-sm truncate w-40 overflow-hidden hover:overflow-visible hover:whitespace-normal'>
            <span className='font-extralight text-gray-700 float-left'>
              Phone
            </span>{' '}
            <br />
            <span className='float-left'>+91 9538774092</span>
          </li>
        </ul>
        <ul className='flex items-center space-x-2 py-4'>
          <li className='bg-slate-900 p-3 rounded-xl '>
            <BiCalendar className='text-white' />
          </li>
          <li className='text-sm truncate w-40 overflow-hidden hover:overflow-visible hover:whitespace-normal'>
            <span className='font-extralight text-gray-700 float-left'>
              DOB
            </span>
            <br />
            <span className='float-left'> 30/11/2000</span>
          </li>
        </ul>
        <ul className='flex items-center space-x-2 py-4'>
          <li className='bg-slate-900 p-3 rounded-xl '>
            <BiLocationPlus className='text-white' />
          </li>
          <li className='text-sm truncate w-40 overflow-hidden hover:overflow-visible hover:whitespace-normal'>
            <span className='font-extralight text-gray-700 float-left'>
              Location
            </span>
            <br />
            <span className='float-left'>Bangalore</span>
          </li>
        </ul>
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
  )
}
