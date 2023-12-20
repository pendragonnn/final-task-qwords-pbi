import React from 'react'

export default function TitleDescription({title, description}) {
  return (
    <div className='flex flex-col gap-3 mt-5 p-2 items-center text-center'>
      <h1 className='text-3xl lg:text-5xl font-bold'>{title}</h1>
      <p className='text-base '>{description}</p>
    </div>
  )
}
