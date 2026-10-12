import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import DemoBanner from '../DemoBanner/DemoBanner'

export default function Layout() {
  return (
    <>
      <a href="#main" className="skipLink">Skip to content</a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <DemoBanner />
    </>
  )
}
