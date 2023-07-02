import { Page } from '@/components/common'
import {
  Destinations,
  Fleet,
  Guid,
  Banner,
  Join,
  Popular,
  Rentals,
} from '@/components/sections'

export default function Home() {
  return (
    <Page
      title='Simple party bus and limo reservations | Shofeur | shofeur.com'
      descripition='Chauffeured reservations made simple Simple party bus and limo reservations Shofeur'
    >
      <Banner />
      <Popular />
      <Guid />
      <Destinations />
      <Rentals />
      <Fleet />
      <Join />
    </Page>
  )
}
