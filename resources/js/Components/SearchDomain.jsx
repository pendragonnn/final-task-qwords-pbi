import React from 'react'
import { Dropdown } from 'flowbite-react';

export default function SearchDomain() {
  const priceList = [
    {domain: '.com', price: 165000},
    {domain: '.id', price: 225000},
    {domain: '.info', price: 77000}
  ]

  return (
    <section className='w-full h-fit bg-orange-500 text-white md:py-5 py-3'>
      {/* title and description */}
      <div className='flex flex-col gap-3 text-center items-center'>
        <h1 className='text-3xl md:text-5xl font-bold py-2'>Cari nama domainmu</h1>
        <p className='w-2/4 md:text-base text-sm'>
          Nama Domain digunakan untuk mempermudah pengunjung menuju ke situs Anda. Pilih nama domain yang paling mencerminkan bisnis, produk, atau layanan Anda.
        </p>
      </div>

      {/* box for form section and domain price section */}
      <div className='flex md:flex-row flex-col md:justify-evenly my-5 items-center'>
        {/* form, dropdown, and search button */}
        <div className='flex flex-col gap-3 md:w-[500px] w-fit lg:mb-0 mb-2'>
          <form action="" className='flex gap-3 items-center'>
            <input type="text" className='rounded-lg w-full text-black' placeholder='Cari nama domain anda' />
            {/* dropdown style manual */}
            <div className='bg-white text-orange-500 rounded-xl'>
              <Dropdown label=".id" dismissOnClick={false} color='inherit'>
                <Dropdown.Item>.id</Dropdown.Item>
                <Dropdown.Item>.com</Dropdown.Item>
                <Dropdown.Item>.xyz</Dropdown.Item>
                <Dropdown.Item>.ach</Dropdown.Item>
              </Dropdown>
            </div>

          </form>
          <button className='p-1 w-1/4 mx-auto border border-white rounded-lg text-white'>
            Cari
          </button>
        </div>

        {/* domain price section */}
        <div className='flex flex-col text-center gap-4 font-bold'>
        {priceList.map((price) => (
          <div className='border p-2 rounded-sm'>
            <p className='text-xl'>{price.domain}</p>
            <p className='text-3xl '>Rp. {price.price}</p>
          </div>
        ))}
        </div>
      </div>

    </section>
  )
}
