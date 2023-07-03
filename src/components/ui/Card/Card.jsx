import Image from 'next/legacy/image'

const Card = (props) => {
  return (
    <div className='flex justify-center relative cursor-pointer'>
      <div className='relative block shadow-md p-3 drop-shadow-sm shadow-gray-400 hover:shadow-gray-500 transition ease-out ease'>
        <Image
          src={props.img}
          alt='step'
          width={400}
          height={320}
          objectFit='cover'
          className='hover:scale-110 transition ease ease-out duration-500'
          unoptimized
        />
        <div className='px-3 absolute bottom-[15px] left-0 w-full'>
          <h3 className='lg:text-2xl text-[26px] text-center backdrop-blur-sm font-semibold text-white bg-black bg-opacity-40 py-3'>
            {props.title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Card
