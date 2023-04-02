import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  // const arr:Product[] = Store((state:any)=>state.arr)

  return (
    <>
      <Navbar
      //  arr={arr}
      />
      {children}
      {/* <Footer/> */}
    </>
  )
}
