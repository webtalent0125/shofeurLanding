import dynamic from 'next/dynamic'
export const Card = dynamic(() => import('./Card/Card'))
export const RentlCard = dynamic(() => import('./RentlCard/RentlCard'))
export const Container = dynamic(() => import('./Container/Container'))
