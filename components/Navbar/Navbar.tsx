import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href='/' className='flex items-center gap-1'>

          <Image src='/assets/logo.png' alt='logo' width={35} height={35} />
        
        <p className="nav-logo">
          Preço<span className='text-primary'>Mestre</span>
        </p>

        </Link>



      </nav>
    </header>
  )
}

export default Navbar