import React from 'react'
import { Button, Image } from '@mantine/core';
import Rating from './Rating'
import { IProdutDetails } from '../../../libs/Type';

type props = {
    id: number | undefined,
    image?: string | undefined,
    brand?: string | undefined,
    description?: string | string,
    price?: number | undefined,
    rating?: number | undefined,
    stock?: number | undefined,
    title?: string | undefined,
    thumbnail: string | undefined,
    category?: string | undefined,
    handleClick?: () => void;

}
 function Card({id, image, brand, description, price, rating, stock, title, handleClick,category,thumbnail}:props) {
  
  return (
    <div className='h-42 w-80 bg-slate-100 rounded-xl'>
      <div className='h-30 bg-blue-200 w-80'>
    <Image
      radius="md"
      className='rounded-md '
      src={thumbnail}
      width="30" height="30"
    />
    </div>
    <div className=' p-4 '>
      <p className='flex justify-between'>id: {id}
      {handleClick ? 
        <Button className='bg-green-600 '
            onClick={
             handleClick
          
          }>Show more images</Button> : ""}
      </p>
      <p>price:  ${price}</p>
      <p>Brand: {brand}</p>
      <p>Title: {title}</p>
      <p>category: {category}</p>
      <p>Description: {description}</p>
      <p>Rating: {rating}</p>
      <p>Stock: {stock}</p>
          <Rating rating={rating}/>
    </div>
  </div>
  )
}
export default Card
