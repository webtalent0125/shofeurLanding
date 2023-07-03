import Image from 'next/legacy/image'

const RentlCard = (props) => {
  return (
    <div className='flex justify-center cursor-pointer'>
      <div className='py-4 px-12 bg-gradient-to-r from-[#00000020] from-10% via-[#00000010] via-30% to-[#00000020] to-90% relative drop-shadow-sm overflow-visible' >
        <Image
          src={props.img}
          alt='step'
          width={250}
          height={250}
          objectFit='contain'
          className='hover:scale-110 transition ease ease-out duration-500'
          unoptimized
        />
        <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-20'>
          <h3 className='lg:text-xl text-[26px] text-center font-semibold text-white py-3'>
            {props.title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default RentlCard
