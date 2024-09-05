export default function Header() {
  return (
    <header className='flex items-center justify-between p-6 bg-gray-900 text-white'>
      <div className='text-3xl font-bold'>MD Suweb Reza</div>
      <nav>
        <ul className='flex space-x-6'>
          <li>
            <a href='#about' className='hover:text-gray-400'>
              About
            </a>
          </li>
          <li>
            <a href='#projects' className='hover:text-gray-400'>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:text-gray-400'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
