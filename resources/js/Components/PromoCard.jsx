import { Card } from 'flowbite-react';

export default function PromoCard({ promoData }) {
  return (
    <Card className="text-center">
      <h5 className="text-2xl tracking-tight text-white bg-orange-500 rounded-full p-2 font-bold">
        {promoData.valueCloudHosting}
      </h5>
      <small className='line-through'>Rp. {promoData.price}</small>
      <p className='text-orange-500 text-3xl font-bold'>Rp. {promoData.discountPrice}</p>
      <div className="grid grid-cols-2 gap-2 w-full text-start mb-5 text-sm items-center font-bold">
        <div className='text-center p-1'>
          <p className='text-base'>Disk </p>
          <span className='text-orange-500 text-2xl'>
            {promoData.disk}
          </span>
        </div>
        <div className='text-center p-1'>
          <p className='text-base'>Bandwith </p>
          <span className='text-orange-500 text-2xl'>
            {promoData.bandwith}
          </span>
        </div>
        <div className='text-center p-1'>
          <p className='text-base'>Core CPU </p>
          <span className='text-orange-500 text-2xl'>
            {promoData.coreCPU} Core
          </span>
        </div>
        <div className='text-center p-1'>
          <p className='text-base'>Addon/Parked Domain </p>
          <span className='text-orange-500 text-2xl'>
            {promoData.addOn}
          </span>
        </div>
      </div>
      <button className=' bg-orange-500 p-2 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500 hover:p-2'>
        Pesan Sekarang
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </Card>
  );
}
