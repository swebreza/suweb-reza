export default function Header({
  setMenu,
}: {
  setMenu: (menu: number) => void
}) {
  return (
    <header className='flex items-center justify-between px-6 py-3 float-right bg-gray-700 rounded-bl-2xl rounded-tr-2xl text-white'>
      <nav className=' '>
        <ul className='flex space-x-6'>
          <li>
            <a
              href='#about'
              className='hover:text-gray-400'
              onClick={() => setMenu(0)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className='hover:text-gray-400'
              onClick={() => setMenu(1)}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className='hover:text-gray-400'
              onClick={() => setMenu(2)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='hover:text-gray-400'
              onClick={() => setMenu(3)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
