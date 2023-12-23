import React from 'react'
import Typed from 'react-typed'
import { Carousel } from "@material-tailwind/react";

export default function Hero() {
  return (
    <section className='container mx-auto mt-20 lg:mt-5 md:h-[100vh] flex'>
      <div className='flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-3 lg:gap-2 mx-0'>
        <div className='lg:w-1/2 w-full h-fit flex flex-col items-center p-2'>
          <h1 className='md:text-5xl text-3xl text-center font-bold p-2 bg-orange-500 rounded-tl-lg rounded-br-lg mb-2'>
            <Typed className='text-white font-bold' strings={['Cloud Hosting', 'Server', 'Domain']} typeSpeed={50} loop />
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

        <div className='lg:w-1/2 w-full h-fit flex justify-center'>
          <Carousel transition={{ duration: 2 }} className="rounded-xl">
           <div className='bg-orange-300 h-[300px] rounded-tl-lg rounded-bl-lg shadow-lg flex items-center justify-between my-20 gap-5 px-5'>
           {/* image-carousel-1 */}
            <img className='w-1/2' src="https://www.qwords.com/wp-content/themes/qwords/assets/images/illustrations/bw.webp" alt="" />
            {/* box title and description carousel 1 */}
            <div className='w-1/2'>
              <h1 className='font-bold md:text-3xl'><span className='text-orange-500'>Bikin Website Impian</span> Dengan Mudah Disini Hanya 1 Jutaan</h1>
              <button className='bg-blue-900 p-2 md:text-base text-sm rounded-full my-2 text-white font-bold'>
                Lihat Selengkapnya
              </button>
            </div>
           </div>

           <div className='bg-orange-300 h-[300px] rounded-tr-lg rounded-br-lg shadow-lg flex items-center justify-between my-20 gap-5 px-5'>
           {/* image-carousel-2 */}
            <img className='w-1/2' src="https://www.qwords.com/wp-content/themes/qwords/assets/images/illustrations/guarantee.webp" alt="" />
            {/* box title and description carousel 2 */}
            <div className='w-1/2'>
              <h1 className='font-bold md:text-3xl'>Garansi 30 Hari <span className='text-orange-500'>Uang Kembali</span> </h1>
              <p className='text-sm md:text-base'>Untuk menjaga kepuasan pelanggan, kami memberikan garansi uang kembali yang berlaku hingga 30 hari setelah hosting aktif.</p>
            </div>
           </div>
          </Carousel>
          {/* <img className='w-3/4 md:w-fit' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/illustrations/storesection.webp" alt="" /> */}
        </div>
      </div>
    </section>
  )
}
