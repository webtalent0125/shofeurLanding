import dynamic from 'next/dynamic'
export const Contact = dynamic(() => import('./Contact/Contact'))
export const Guid = dynamic(() => import('./Guid/Guid'))
export const Banner = dynamic(() => import('./Banner/Banner'))
export const Fleet = dynamic(() => import('./Fleet/Fleet'))
export const Join = dynamic(() => import('./Join/Join'))
export const Popular = dynamic(() => import('./Popular/Popular'))
export const Rentals = dynamic(() => import('./Rentals/Rentals'))
export const Destinations = dynamic(() =>
  import('./Destinations/Destinations')
)
