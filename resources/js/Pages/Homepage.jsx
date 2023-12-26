import Commitment from '@/Sections/Commitment'
import Hero from '@/Sections/Hero'
import Media from '@/Sections/Media'
import Packet from '@/Sections/Packet'
import Partner from '@/Sections/Partner'
import PaymentMethod from '@/Sections/PaymentMethod'
import Promo from '@/Sections/Promo'
import QuestionAnswer from '@/Sections/QuestionAnswer'
import SearchDomain from '@/Sections/SearchDomain'
import Service from '@/Sections/Service'
import ServiceCenter from '@/Sections/ServiceCenter'
import Testimony from '@/Sections/Testimony'
import TrustCompany from '@/Sections/TrustCompany'
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
