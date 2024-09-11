import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image, { StaticImageData } from 'next/image'
import Nikkari from '@/assets/nikkari.png'
import Portfolio from '@/assets/portfolio.png'
import TravelApp from '@/assets/travel.png'

// Define the structure of a project
interface Project {
  id: number
  title: string
  description: string
  imageUrl: StaticImageData
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
    title: 'Portfolio',
    description: 'Personal portfolio website',
    imageUrl: Portfolio,
    link: 'https://main--cheery-scone-e484f6.netlify.app/',
  },
  {
    id: 3,
    title: 'Travel App',
    description: 'Travel app to find the best places to visit',
    imageUrl: TravelApp,
    link: 'https://distracted-euler-c04064.netlify.app/',
  },
  // {
  //   id: 4,
  //   title: 'Project Delta',
  //   description: 'E-commerce platform for small businesses',
  //   imageUrl: '/placeholder.svg?height=200&width=300',
  //   link: 'https://www.google.com',
  // },
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
