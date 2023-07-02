import { Footer, SideBar } from '@/components/common'

const Layout = (props) => {
  return (
    <>
      <SideBar />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export { Layout }
