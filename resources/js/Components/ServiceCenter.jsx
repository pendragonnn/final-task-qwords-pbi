import React from 'react'

export default function ServiceCenter() {
  return (
    <section className='h-[40vh] md:h-[50vh] lg:h-[100vh] flex items-center justify-center mt-10 bg-orange-100'>
      {/* title and contact box */}
      <div className='flex md:flex-row flex-col gap-3 md:gap-0'>
        {/* title */}
        <div className='md:w-1/2 w-full flex flex-col text-center gap-3'>
          <h1 className='font-bold md:text-5xl text-3xl p-1'>Butuh <span className='text-orange-500'>Bantuan?</span></h1>
          <p className='font-bold'>Kami siap membantu anda 24 jam</p>
        </div>
        <div className='grid grid-cols-2 gap-2 text-white mx-auto'>
          <div className='text-center text-sm md:text-base flex items-center justify-center p-2 border rounded-full bg-orange-500'>0804-1-808-888</div>
          <div className='text-center text-sm md:text-base flex items-center justify-center p-2 border rounded-full bg-orange-500'>02139708800</div>
          <div className='text-center text-sm md:text-base flex items-center justify-center p-2 border rounded-full bg-orange-500'>+62817437111 (WhatsApp only)</div>
          <div className='text-center text-sm md:text-base flex items-center justify-center p-2 border rounded-full bg-orange-500'>info@qwords.com</div>
        </div>

      </div>
    </section>
  )
}
