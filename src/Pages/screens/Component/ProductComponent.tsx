import React from 'react'
import { Button, Image } from '@mantine/core';
import Rating from './Rating';

type props ={
    id: number,
    title: string,
    price: number,
    description: string,
    category:string,
    image:string,
    rate:number,
    count:number
}

export default function ProductComponent({id, title, price, description, category, image, rate, count}: props) {
  return (
    <div className='h-42 w-80 bg-slate-100 rounded-xl'>
      <div className='h-30 bg-blue-200 w-80'>
    <Image
      radius="md"
      className='rounded-md '
      src={image}
      width="30" height="30"
    />
    </div>
    <div className=' p-4 '>
      <p className='flex justify-between'>id: {id}
      </p>
      <p>price:  ${price}</p>
      <p>Count: {count}</p>
      <p>Title: {title}</p>
      <p>category: {category}</p>
      <p>Description: {description}</p>
      <p>Rating: {rate}</p>
          <Rating rating={rate}/>
    </div>
  </div>
  )
}
