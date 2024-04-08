import React from 'react'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Footer from '../components/Footer'

const loading = () => {
  return (
    <>
    <Navbar/>
    <Title title="Series"/>
    <h1>Loading.......</h1>
    <Footer/>
    </>
  )
}

export default loading