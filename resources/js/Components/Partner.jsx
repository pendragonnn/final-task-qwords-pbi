import React from 'react'

export default function TrustCompany() {
  return (
    <section className='h-fit my-10 px-5'>
      {/* title and company logo*/}
      <div className='lg:flex lg:justify-between'>
        {/* title and more info */}
        <div className='flex flex-col md:gap-10 gap-5 my-5 md:my-0 items-center justify-center mx-auto text-center'>
          <h1 className='text-3xl font-bold'>Partner Kami</h1>
          <div className='flex gap-1 items-center'>
            <a className='text-orange-500' href="">Lihat Semua Partner </a>
            <img className='w-[24px]' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/Right.webp" alt="" />
          </div>
        </div>

        {/* company logo */}
        <div className='grid grid-cols-4 lg:w-1/2 md:w-full w-fit gap-1 items-center border border-orange-100 rounded-lg p-2'>
          <img className='col-span-2 w-40 mx-auto' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Partner/Cpanel.webp" alt="" />
          <img className='col-span-2 w-40 mx-auto' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Partner/Idea.webp" alt="" />
          <img className='col-span-4 w-40 mx-auto' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Partner/Google.webp" alt="" />
          <img className='col-span-2 w-40 mx-auto' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Partner/Archi.webp" alt="" />
          <img className='col-span-2 w-40 mx-auto' src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Partner/dotid.webp" alt="" />
        </div>
      </div>
    </section>
  )
}
