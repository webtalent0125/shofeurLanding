import Image from 'next/image'
import logo from '@/assets/logo.webp'
import Link from 'next/link'

const SideBar = () => {
  return (
    <div className='fixed top-4 left-1/2 z-30 -translate-x-1/2 container px-2'>
      <div className='flex justify-between p-4 rounded-md backdrop-blur-md border-[0.2px] border-white border-opacity-30 shadow-lg bg-black bg-opacity-20'>
        <Link href={'/'}>
          <Image src={logo} alt='logo' />
        </Link>
        <div className='gap-6 text-white hidden sm:flex'>
          <Link
            href={'/'}
            className='transition ease ease-out rounded-md flex items-center border-[0.5px] px-4 border-white border-opacity-30 hover:bg-opacity-20 hover:bg-white/25 '
          >
            Reservations
          </Link>
          <Link
            href={'/'}
            className='transition ease ease-out rounded-md flex items-center border-[0.5px] px-4 border-white border-opacity-30 hover:bg-opacity-20 hover:bg-white/25 '
          >
            My Account
          </Link>
        </div>
        <div className='block my-auto cursor-pointer sm:hidden'>
          <div className='h-1 w-6 my-1 rounded-full dark:bg-white bg-black transition ease transform duration-300 group-hover:opacity-100' />
          <div className='h-1 w-6 my-1 rounded-full dark:bg-white bg-black transition ease transform duration-300 group-hover:opacity-100' />
          <div className='h-1 w-6 my-1 rounded-full dark:bg-white bg-black transition ease transform duration-300 group-hover:opacity-100' />
        </div>
      </div>
    </div>
  )
}

export default SideBar
