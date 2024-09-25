import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image, { StaticImageData } from 'next/image'
import Nikkari from '@/assets/nikkari.png'
import Portfolio from '@/assets/image.png'
import TravelApp from '@/assets/travel.png'

// Define the structure of a project
interface Project {
  id: number
  title: string
  description: string
  imageUrl: StaticImageData | string
  link?: string
}

// Sample project data
const projects: Project[] = [
  {
    id: 1,
    title: 'Nikkari',
    description:
      'Nikkari developed brush cutters to reduce mowing work under the hot sun, and mono-rack to ease heavy items carrying in steep field.',
    imageUrl: Nikkari,
    link: 'https://nikkari.vercel.app/',
  },
  {
    id: 2,
    title: 'Joboxhire Hiring Platform',
    description:
      'A platform for hiring and job search with a dashboard for employers and job seekers and Key admin features built with T3 Stack',
    imageUrl: Portfolio,
    link: 'https://joboxhire.com/',
  },
  {
    id: 3,
    title: 'Vidintelify',
    description: 'Video generator web application that generates 15s videos with simple prompt. (This project is under development)',
    imageUrl: TravelApp,
    link: 'https://vidintelify.vercel.app/',
  },

  {
    id: 4,
    title: 'Resume QR Builder',
    description:
      'A Django Bootstrap project for creating a resume and QR code. iNeuron.ai (PW Skills) hosted a hackathon where I built this webapp.',
    imageUrl:
      'https://github.com/swebreza/qr-resume/blob/main/assets/qr-resume.gif?raw=true',
    link: 'https://github.com/swebreza/qr-resume',
  },
  {
    id: 5,
    title: 'Event manager Blog',
    description:
      'A Django-built website with an admin panel, a blog, a contact form, and other pages that can be completely managed from the backend.',
    imageUrl:
      'https://main--cheery-scone-e484f6.netlify.app/static/media/Event%20Manager%20Blog.079003ad5aabe97a2511.png',
    link: 'https://swebreza.github.io/eventplanner/',
  },
  {
    id: 6,
    title: 'user-json-list',
    description:
      'This is a npm package that contains 1000 randomly generated user details that can be used by Developer for testing their app locally',
    imageUrl:
      'https://main--cheery-scone-e484f6.netlify.app/static/media/NPM%20package.e45c65f0991172f31d25.png',
    link: 'https://github.com/swebreza/user-list-json',
  },
]

export default function Projects() {
  return (
    <section id='projects' className='p-10 rounded-3xl bg-black'>
      <h2 className='text-4xl font-bold text-white'>Project</h2>
      <span className='px-2 mb-6 bg-slate-800 text-gray-800 rounded-full'>
        -----------
      </span>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden'>
        {projects.map((project) => (
          <Card key={project.id} className='overflow-hidden'>
            <a href={project?.link}>
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={300}
                height={200}
                className='w-full h-48 object-cover'
              />
              <CardHeader>
                <CardTitle className='text-white'>{project.title}</CardTitle>
                <CardDescription className='text-gray-400'>
                  {project.description}
                </CardDescription>
              </CardHeader>
            </a>
          </Card>
        ))}
      </div>
    </section>
  )
}
