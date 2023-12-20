import React from 'react'
import ServiceCard from './ServiceCard'

export default function Service() {
  const serviceData = [
    { title: 'SSL', description: 'Jadikan website Anda lebih terpercaya dan disukai oleh search engine dengan menggunakan SSL Certificate.', price: 112000, range: 'tahun' },
    { title: 'Dedicated Server', description: 'Nikmati kelola Dedicated Server sendiri dengan akses remote dari seluruh dunia tanpa batas.', price: 499000, range: 'bulan' },
    { title: 'Colocation Server', description: 'Akses cepat dari seluruh dunia dengan fasilitas 24x7 full monitoring dengan cooling system terbaik serta fire extinguisher.', price: 500000, range: 'bulan' },
  ]
  return (
    <section className='w-full h-fit'>
      {/* title and description */}
      <div className='flex flex-col gap-3 mt-5 p-2 items-center text-center'>
        <h1 className='text-3xl lg:text-5xl font-bold'>Lihat Juga Layanan Kami Yang Lain</h1>
        <p className='text-base '>Optimalkan performa website bisnis Anda dengan berbagai layanan berkualitas dari Qwords</p>
      </div>
      
      {/* service card */}
      <div className='grid grid-cols-1 lg:grid-cols-3 h-fit lg:h-[100vh] md:h-[80vh] my-2 gap-2 lg:p-2 px-4'>
        <div className='flex md:justify-center items-start'>
          {/* card 1 */}
          <ServiceCard serviceData={serviceData[0]} />
        </div>
        <div className='flex md:justify-center lg:items-center'>
          {/* card 2 */}
          <ServiceCard serviceData={serviceData[1]} />
        </div>
        <div className='flex md:justify-center lg:items-end'>
          {/* card 3 */}
          <ServiceCard serviceData={serviceData[2]} />
        </div>
      </div>
    </section>
  )
}
