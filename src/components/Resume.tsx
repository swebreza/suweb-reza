import { Book, Download } from 'lucide-react'

import { Progress } from '@/components/ui/progress'
const SkillBar = ({
  skill,
  percentage,
}: {
  skill: string
  percentage: number
}) => (
  <div className='mb-4'>
    <div className='flex justify-between mb-1 '>
      <span className='text-sm font-medium text-primary text-white'>
        {skill}
      </span>
      <span className='text-sm font-medium text-primary text-white'>
        {percentage}%
      </span>
    </div>
    <Progress value={percentage} className='h-2 bg-black' />
  </div>
)

const skillsData = [
  { skill: 'Web Design', percentage: 80 },
  { skill: 'NextJs', percentage: 80 },
  { skill: 'Tailwind css', percentage: 70 },
  { skill: 'Database Management Systems', percentage: 60 },
  { skill: 'AWS', percentage: 40 },
  { skill: 'TRPC', percentage: 70 },
  { skill: 'ReactJs', percentage: 80 },
  { skill: 'NodeJs', percentage: 80 },
  { skill: 'ExpressJs', percentage: 70 },
  { skill: 'PostgreSQL', percentage: 60 },
  { skill: 'Docker', percentage: 50 },
]

export default function Component() {
  return (
    <div id='resume' className='p-10 bg-black text-gray-100 rounded-2xl'>
      <h2 className='text-4xl font-bold text-white'>Resume</h2>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
        <div>
          <span className='px-2 mb-6 bg-slate-800 text-gray-800 rounded-full'>
            -----------
          </span>
          <br />
          <br />
          <a
            href='/resume.pdf'
            download
            className='flex hover:bg-slate-900 bg-black border border-white p-2 w-fit rounded-2xl gap-3'
          >
            <Download className='' />
            <h2 className='mr-1'>Download</h2>
          </a>

          <br />
          <h2 className='text-2xl font-bold mb-6'>Education</h2>
          <div className='relative border-l border-gray-700 pl-6 ml-3'>
            <Book className='relative -left-10 top-0 text-white' size={20} />{' '}
            {[
              {
                title: 'Bachelor Of Computer Science and Engineering',
                date: '2019 — 2013',
                institution:
                  'Acharya Institute of Technology, Visvesvaraya Technological University.',
              },
              {
                title: 'Diploma Of Computer Science and Engineering',
                date: '2020 — 2023',
                institution:
                  'Acharya Polytechnic, Department of Technical Education.',
              },
            ].map((item, index) => (
              <div key={index} className='mb-8 relative'>
                <div className='absolute w-3 h-3 bg-gray-500 rounded-full -left-7 top-1.5 border border-gray-900'></div>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='text-gray-500 text-sm'>{item.date}</p>
                <p className='text-gray-400 mt-1'>{item.institution}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-bold mb-6'>My Skills</h2>
          {skillsData.map((skill, index) => (
            <SkillBar
              key={index}
              skill={skill.skill}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
