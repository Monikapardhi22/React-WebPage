import React from 'react'
import Navbar from './component/Navbar'
import Hero from './Hero/Hero'
import Category from './Hero/Category/Category'
import Service from './Hero/Service'
import Footer from './Hero/Footer'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Service/>
      <Footer/>
    </div>
  )
}
