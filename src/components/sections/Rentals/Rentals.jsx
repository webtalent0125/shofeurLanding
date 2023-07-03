import { RentlCard } from '@/components/ui'
import luxury from '@/assets/rentals/luxury.webp'
import limousine from '@/assets/rentals/limousine.webp'
import smallParty from '@/assets/rentals/smallParty.webp'
import mediumPary from '@/assets/rentals/mediumParty.webp'
import largePary from '@/assets/rentals/largeParty.webp'

const Rentals = () => {
  return (
    <div className='w-full py-16 bg-gradient-to-r from-yellow-600 from-10% via-yellow-500 via-30% to-yellow-800 to-90% text-white'>
      <div className='container mx-auto px-2'>
        <p className='text-center text-4xl font-semibold pt-0 pb-4'>
          Rentals for any group size
        </p>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gtid-cols-1 gap-8 pt-4'>
          <RentlCard img={luxury} title='Luxury SUV Up to 6 people' />
          <RentlCard img={limousine} title='Limousine Up to 10 people' />
          <RentlCard img={smallParty} title='Small Party Bus Up to 16 people' />
          <RentlCard
            img={mediumPary}
            title='Medium Party Bus Up to 30 people'
          />
          <RentlCard img={largePary} title='Large Party Bus Up to 50 people' />
        </div>
      </div>
    </div>
  )
}

export default Rentals
