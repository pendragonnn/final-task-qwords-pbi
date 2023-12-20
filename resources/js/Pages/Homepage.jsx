import Hero from '@/Components/Hero'
import Packet from '@/Components/Packet'
import Promo from '@/Components/Promo'
import SearchDomain from '@/Components/SearchDomain'
import Service from '@/Components/Service'
import React from 'react'
import Navbar from '../Components/Navbar'

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchDomain />
      <Promo />
      <Service />
      <Packet />
    </>
  )
}
