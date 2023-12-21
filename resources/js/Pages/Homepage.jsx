import Commitment from '@/Components/Commitment'
import Hero from '@/Components/Hero'
import Media from '@/Components/Media'
import Packet from '@/Components/Packet'
import Partner from '@/Components/Partner'
import Promo from '@/Components/Promo'
import SearchDomain from '@/Components/SearchDomain'
import Service from '@/Components/Service'
import Testimony from '@/Components/Testimony'
import TrustCompany from '@/Components/TrustCompany'
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
      <Commitment />
      <TrustCompany />
      <Partner />
      <Testimony />
      <Media />
    </>
  )
}
