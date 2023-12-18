import React from 'react'

export default function Hero() {
  return (
    <section className='container mx-auto mt-10 lg:mt-20'>
      <div className='flex items-center justify-between flex-col lg:flex-row'>
        <div className='flex flex-col items-center p-2'>
          <h1 className='lg:text-7xl text-3xl text-center font-bold p-2'>
            Cloud Hosting untuk <span className='text-orange-500'>Kesuksesan Website-mu!</span>
          </h1>

          <div className='my-5 text-center font-bold text-base lg:text-xl'>
            Qwords menawarkan layanan Cloud Hosting yang Cepat, Aman, dan Dukungan 24 jam untuk memenuhi kebutuhan hosting Anda. Tersertifikasi ISO 27001 dengan Data Center Tier 3.
          </div>

          <div className='flex gap-5'>
            <div className='bg-orange-500 p-3 text-white font-bold rounded-xl'>
              #QwordsYourSuccess
            </div>
            <button className='border border-orange-500 bg-white p-3 text-orange-500 rounded-full'>Pesan Sekarang</button>
          </div>

        </div>

        <div className='w-full flex justify-center'>
          <img src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/illustrations/storesection.webp" alt="" />
        </div>


      </div>
    </section>
  )
}
