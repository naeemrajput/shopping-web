import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ICardDetails } from '../../libs/Type'
import Card from './Component/cardComponent'

export default function ProdutDetails() {
    const [card, setCard] = useState<ICardDetails>()
    const [isFirstLoad, setISFirstLoad] = useState<boolean>(true)

    useEffect(()=>{
        if(isFirstLoad){
            setISFirstLoad(false)
        }else{
            getCardDetail()
        }
    },[isFirstLoad])

    const getCardDetail = () => {
        axios.get(`https://dummyjson.com/carts/1`).then((res) => {
            console.log("REsponse for API: ",res?.data)
            setCard(res?.data)
        })
    }


    // handle function
    const handleClick = () => {
        console.log("handle card ")
    }
  return (
    <div className=''>
        <div className='card'>
            {card?.products?.map((each,index) => (
            <Card
             id={card?.id} 
             brand={each?.title}
              description={each?.title} 
              price={each?.price}
               rating={undefined}
                stock={undefined} 
                thumbnail={undefined}
                 category={undefined} 
                 handleClick={handleClick}/>
                 ))}
        </div>
    </div>
  )
}
