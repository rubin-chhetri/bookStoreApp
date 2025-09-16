import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Course from '../../components/Course'


const Courses = () => {
  return (<>
  <div className='dark:bg-slate-900 dark:text-white'>
        <Navbar/>
    <div className='min-h-screen bg-white'> 
      <Course/>
    </div>
        <Footer/>
        </div>
    </>
  )
}

export default Courses
