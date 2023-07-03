import { Card } from '@/components/ui'
import wedding from '@/assets/popular/wedding.webp'
import airport from '@/assets/popular/airport.webp'
import brunch from '@/assets/popular/brunch.webp'
import concert from '@/assets/popular/concert.webp'
import party from '@/assets/popular/party.webp'
import wine from '@/assets/popular/wine.webp'

const Popular = () => {
  return (
    <div className='container mx-auto p-4 pb-16'>
      <p className='text-center text-4xl font-semibold py-4 text-gray-600'>
        Popular occasions
      </p>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 gtid-cols-1 gap-6 pt-4'>
        <Card img={wedding} title='Wedding' />
        <Card img={airport} title='Airport' />
        <Card img={brunch} title='Brunch' />
        <Card img={concert} title='Wedding' />
        <Card img={party} title='Party' />
        <Card img={wine} title='Wine Tasting' />
      </div>
    </div>
  )
}

export default Popular
