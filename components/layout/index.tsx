import Navbar from '@ui/Navbar'
import Footer from '@ui/Footer'

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}