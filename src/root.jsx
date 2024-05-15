
import { Outlet } from 'react-router-dom'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'




function Root() {


  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>
  )

}

export default Root
