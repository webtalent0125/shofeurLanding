import dynamic from 'next/dynamic'
export const SideBar = dynamic(() =>
  import('./SideBar/SideBar', { ssr: false })
)
export const Footer = dynamic(() => import('./Footer/Footer'))
export { Meta } from './Meta/Meta'
export { Page } from './Page/Page'
export { Layout } from './layouts/Layout'
