
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import FreeBook from '../../components/FreeBook'
const Home = () => {
  return (
    <div>
       <div className='min-h-screen bg-white dark:bg-slate-900 dark:text-white'>
      <Navbar/>
      <Banner/>
      <FreeBook/>
      <Footer/>
    </div>
    </div>
  )
}

export default Home
