import { BiWinkSmile, BiTerminal } from 'react-icons/bi'
import { ImSearch } from 'react-icons/im'

const Guid = () => {
  return (
    <div className='w-full py-16 bg-gradient-to-r from-yellow-600 from-10% via-yellow-500 via-30% to-yellow-800 to-90% text-white'>
      <div className='container mx-auto px-2'>
        <p className='text-center text-4xl font-semibold pt-0 pb-4'>How is works</p>
        <div className='grid sm:grid-cols-3 grid-cols-1'>
          <div className='py-3 sm:px-12 px-2'>
            <div className='flex'>
              <div className='flex justify-center items-center'>
                <ImSearch className='text-5xl my-auto mx-4' />
              </div>
              <div>
                <p className='text-2xl font-semibold'>Search</p>
                <p>
                  Search for a party bus, limousine, or
                  <br /> any other group vehicle.
                </p>
              </div>
            </div>
          </div>
          <div className='py-3 sm:px-12 px-2'>
            <div className='flex'>
              <div className='flex justify-center items-center'>
                <BiTerminal className='text-5xl my-auto mx-4' />
              </div>
              <div>
                <p className='text-2xl font-semibold'>Reserve</p>
                <p>
                  Message the host directly and book
                  <br /> securely online.
                </p>
              </div>
            </div>
          </div>
          <div className='py-3 sm:px-12 px-2'>
            <div className='flex'>
              <div className='flex justify-center items-center'>
                <BiWinkSmile className='text-5xl my-auto mx-4' />
              </div>
              <div>
                <p className='text-2xl font-semibold'>Enjoy</p>
                <p>
                  Enjoy your chauffeured experience then
                  <br /> share your review!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guid
