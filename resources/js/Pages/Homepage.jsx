import Hero from '@/Components/Hero'
import Promo from '@/Components/Promo'
import SearchDomain from '@/Components/SearchDomain'
import Service from '@/Components/Service'
import React from 'react'
import Navbar from '../Components/Navbar'
import ServiceCard from '../Components/ServiceCard'

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchDomain />
      <Promo />
      <Service />
    </>
  )
}
