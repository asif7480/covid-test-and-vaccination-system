import { Button } from '@/components/ui/button'
import Hero from '@/components/User/Hero'
import Overview from '@/components/User/Overview'
import Pricing from '@/components/User/Pricing'
import React from 'react'
import Footer from './Footer'

function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Pricing />
      <Footer />
    </>
  )
}

export default Home