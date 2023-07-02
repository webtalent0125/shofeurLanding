import Image from "next/legacy/image"

const Card = (props) => {
  return (
    <div className='bg-card-light text-black hover:text-white dark:text-white dark:bg-[#145024] dark:hover:bg-card-darkhover dark:hover:text-white hover:bg-secondary-dark transition ease-out p-6 grid grid-cols-1 gap-6 cursor-pointer drop-shadow-xl py-16'>
      <div className='flex justify-center py-2'>
        <Image src={props.img} alt='step' width={300} height={220} unoptimized/>
      </div>
      <h3 className='lg:text-4xl text-[26px]'>{props.title}</h3>
      <p className='dark:text-[#BFD1B7] text-lg leading-relaxed group-hover:text-gray-300'>
        {props.description}
      </p>
    </div>
  )
}

export default Card
