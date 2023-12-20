import React from 'react'
import { Card } from 'flowbite-react';

export default function PacketCard({ packetData }) {
  return (
    <div className='flex items-center justify-center'>
      <Card
        className="w-full h-[400px] bg-orange-500"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={packetData.img}
      >
        <h5 className="text-2xl text-white font-bold tracking-tight dark:text-white">
          {packetData.title}
        </h5>
        <p className="font-normal text-white dark:text-gray-400">
          {packetData.description}
        </p>
      </Card>
    </div>

  )
}
