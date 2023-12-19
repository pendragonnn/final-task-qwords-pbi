import Hero from '@/Components/Hero'
import Promo from '@/Components/Promo'
import SearchDomain from '@/Components/SearchDomain'
import React from 'react'
import Navbar from '../Components/Navbar'

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchDomain />
      <Promo />
    </>
  )
}
