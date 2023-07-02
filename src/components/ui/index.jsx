import dynamic from 'next/dynamic'
export const Card = dynamic(() => import('./Card/Card'))
export const Container = dynamic(() => import('./Container/Container'))
