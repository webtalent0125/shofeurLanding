import { Card } from '@/components/ui'
import socal from '@/assets/iconic/socal.webp'
import cabo from '@/assets/iconic/cabo.webp'
import dallas from '@/assets/iconic/dallas.webp'
import vegas from '@/assets/iconic/vegas.webp'
import cleveland from '@/assets/iconic/cleveland.webp'
import Norcal from '@/assets/iconic/Norcal.webp'

const Destiniations = () => {
  return (
    <div className='container mx-auto p-4 pb-16'>
      <p className='text-center text-4xl font-semibold py-4 text-gray-600'>
        Iconic destinations
      </p>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 gtid-cols-1 gap-6 pt-4'>
        <Card img={socal} title='Luxury SUV Up to 6 people' />
        <Card img={cabo} title='Limousine Up to 10 people' />
        <Card img={dallas} title='Small Party Bus Up to 16 people' />
        <Card img={vegas} title='Medium Party Bus Up to 30 people' />
        <Card img={cleveland} title='Cleveland' />
        <Card img={Norcal} title='Large Party Bus Up to 50 people' />
      </div>
    </div>
  )
}

export default Destiniations
