export default function Projects() {
  return (
    <section id='projects' className='p-10 bg-gray-900'>
      <h2 className='text-4xl font-bold text-center mb-8'>Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Repeat the project card as needed */}
        <div className='p-6 border rounded-md shadow-md'>
          <h3 className='text-2xl font-bold mb-4'>Project 1</h3>
          <p className='mb-4'>
            Description of Project 1 with its details and technologies used.
          </p>
          <a href='#' className='text-blue-500 hover:underline'>
            View Project
          </a>
        </div>
      </div>
    </section>
  )
}
