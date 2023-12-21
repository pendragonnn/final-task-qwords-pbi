import Commitment from '@/Components/Commitment'
import Hero from '@/Components/Hero'
import Media from '@/Components/Media'
import Packet from '@/Components/Packet'
import Partner from '@/Components/Partner'
import PaymentMethod from '@/Components/PaymentMethod'
import Promo from '@/Components/Promo'
import QuestionAnswer from '@/Components/QuestionAnswer'
import SearchDomain from '@/Components/SearchDomain'
import Service from '@/Components/Service'
import ServiceCenter from '@/Components/ServiceCenter'
import Testimony from '@/Components/Testimony'
import TrustCompany from '@/Components/TrustCompany'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '@/Components/Footer'

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
      <PaymentMethod />
      <QuestionAnswer />
      <ServiceCenter />
      <Footer />
    </>
  )
}
