import Image from 'next/image'
import bannerimg from '@/assets/banner.jpg'
import { ImSearch } from 'react-icons/im'

const Banner = () => {
  return (
    <div className='block relative'>
      <div className='w-full h-[calc(100vh/1.5)] relative'>
        <Image
          src={bannerimg}
          alt='banner img'
          objectFit='cover'
          objectPosition='center'
          layout='fill'
        />
      </div>
      <div className='absolute let-0 top-0 w-full h-full flex justify-center items-center bg-black bg-opacity-40 z-20'>
        <div className='flex flex-col gap-4'>
          <p className='text-3xl text-white text-center'>
            Chauffeured reservations made simple
          </p>
          <div className='px-2'>
            <div className='rounded-full backdrop-blur-md border-[0.2px] border-white border-opacity-30 shadow-lg text-white flex bg-black bg-opacity-20'>
              <ImSearch className='text-4xl ml-4 mr-2 my-auto' />
              <input
                type='text'
                className='bg-transparent text-white focus:outline-none w-full px-2'
                placeholder='Picup City or air port'
              />
              <button className='rounded-full border-[0.2px] border-white transition ease ease-in border-opacity-30 p-4'>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
