import Navbar from '@ui/layout/Navbar'
import Footer from '@ui/layout/Footer'

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}