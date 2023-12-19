import { Button, Card } from 'flowbite-react';

export default function PromoCard({promoData}) {
  return (
    <Card className="relative min-w-[50%] text-center">
      <h5 className="text-2xl tracking-tight text-white bg-orange-500 rounded-full p-2 font-bold">
       { promoData.valueCloudHosting }
      </h5>
      <small className='line-through'>Rp. {promoData.price}</small>
      <p className='text-orange-500 text-3xl font-bold'>Rp. {promoData.discountPrice}</p>
      <div className="grid grid-cols-2 gap-2 w-full text-start mb-5 text-sm">
        <div className='shadow-sm text-center border rounded p-1'>Disk: <span className='text-orange-500 font-bold'>{promoData.disk}</span></div>
        <div className='shadow-sm text-center border rounded p-1'>Bandwith: <span className='text-orange-500 font-bold'>{promoData.bandwith}</span></div>
        <div className='shadow-sm text-center border rounded p-1'>Core CPU: <span className='text-orange-500 font-bold'>{promoData.coreCPU}</span> core</div>
        <div className='shadow-sm text-center border rounded p-1'>Addon/Parked Domain: <span className='text-orange-500 font-bold'>{promoData.addOn}</span></div>
      </div>
      <button className=' bg-orange-500 p-2 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500'>
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
