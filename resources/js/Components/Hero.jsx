import React from 'react'
import Typed from 'react-typed'

export default function Hero() {
  return (
    <section className='container mx-auto mt-20 md:mt-10 lg:mt-5 h-[100vh] flex'>
      <div className='flex items-center md:justify-between justify-start gap-3 lg:gap-0 flex-col md:flex-row'>
        <div className='flex flex-col items-center p-2'>
          <h1 className='md:text-5xl text-3xl text-center font-bold p-2'>
            <Typed className='text-orange-500 font-bold' strings={['Cloud Hosting', 'Server', 'Domain']} typeSpeed={50} loop />
          </h1>
          <span className='text-center md:text-5xl text-3xl font-bold'>Untuk Keperluan Perusahaan Anda</span>

          <div className='my-5 text-center font-bold text-base md:text-xl'>
            Qwords menawarkan layanan yang cepat, aman, dan dukungan 24 jam untuk memenuhi kebutuhan hosting Anda. Tersertifikasi ISO 27001 dengan Data Center Tier 3.
          </div>

          <div className='flex gap-5'>
            <div className='bg-orange-500 p-3 text-white font-bold rounded-xl'>
              #QwordsYourSuccess
            </div>
            <button className='border border-orange-500 bg-white p-3 text-orange-500 rounded-full'>Pesan Sekarang</button>
          </div>

        </div>

        <div className='w-full flex justify-center'>
          <img className='w-3/4 md:w-fit' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/illustrations/storesection.webp" alt="" />
        </div>
      </div>
    </section>
  )
}
