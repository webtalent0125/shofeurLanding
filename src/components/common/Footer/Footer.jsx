import { GrMail } from 'react-icons/gr'
import {
  BsLinkedin,
  BsTiktok,
  BsTwitter,
  BsYoutube,
  BsFacebook,
  BsInstagram,
} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='container py-16 mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 px-12'>
        <ul className='lg:col-span-3'>
          <li className='text-lg'>Contact Us</li>
          <li className='mt-2 flex text-sm wrap'>
            <span className='flex items-center'>
              <GrMail />
            </span>
            &nbsp; support@shofeur.com
          </li>
          <li className='text-lg mt-2'>About Us</li>
        </ul>
        <div className='lg:col-span-3 lg:flex lg:justify-center'>
          <ul>
            <li className='text-lg'>Company</li>
            <li className='mt-1'>About us </li>
            <li className='mt-1'>Pricing </li>
            <li className='mt-1'>Careers </li>
          </ul>
        </div>
        <div className='lg:col-span-3 lg:flex lg:justify-center'>
          <ul>
            <li className='text-lg'>Resources</li>
            <li className='mt-2'>Blog </li>
            <li className='mt-1'>FAQs </li>
            <li className='mt-1'>Docs </li>
          </ul>
        </div>
        <div className='lg:col-span-3'>
          <ul className='flex lg:justify-end gap-4'>
            <li className='bg-black bg-opacity-50 p-3 rounded-full cursor-pointer hover:bg-opacity-70 transition ease ease-out'>
              <a href='https://www.instagram.com/shofeur/' target='_blank'>
                <BsInstagram color='white'/>
              </a>
            </li>
            <li className='bg-black bg-opacity-50 p-3 rounded-full cursor-pointer hover:bg-opacity-70 transition ease ease-out'>
              <a
                href='https://www.linkedin.com/company/shofeur/'
                target='_blank'
              >
                <BsLinkedin color='white'/>
              </a>
            </li>
            <li className='bg-black bg-opacity-50 p-3 rounded-full cursor-pointer hover:bg-opacity-70 transition ease ease-out'>
              <a href='https://www.youtube.com/@shofeur' target='_blank'>
                <BsYoutube color='white'/>
              </a>
            </li>
            <li className='bg-black bg-opacity-50 p-3 rounded-full cursor-pointer hover:bg-opacity-70 transition ease ease-out'>
              <a href='https://www.facebook.com/shofeur' target='_blank'>
                <BsFacebook color='white'/>
              </a>
            </li>
            <li className='bg-black bg-opacity-50 p-3 rounded-full cursor-pointer hover:bg-opacity-70 transition ease ease-out'>
              <a href='https://www.tiktok.com/@infoshofeur' target='_blank'>
                <BsTiktok color='white'/>
              </a>
            </li>
            <li className='bg-black bg-opacity-50 p-3 rounded-full cursor-pointer hover:bg-opacity-70 transition ease ease-out'>
              <a href='https://twitter.com/shofeurinc' target='_blank'>
                <BsTwitter color='white'/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className='border my-8 border-yellow-800' />
      <div className='w-full mt-8'>
        <div className='mx-auto w-20 flex justify-center'>
          <p className='text-3xl font-semibold'>shofeur</p>
        </div>
        <p className='text-center text-sm mt-8'>
          © shofeur. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
