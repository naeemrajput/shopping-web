import { TextInput } from '@mantine/core'
import React, { useState } from 'react'

export default function AddProdut() {
    const [title, setTitle] = useState<string>('')
    const [price, setPrice] = useState<number>()
    const [category, setCategory] = useState<string>('')
    const [description, setDesription] = useState<string>()
  return (
    <div className=''>
        <div className='post-data '>
            <TextInput
            placeholder='Title'
            value={title}
            onChange={(e) =>{setTitle(e.target.value)}}
            />
            <TextInput
            placeholder='Price'
            value={price}
            onChange={(e) => {setPrice(+(e.target.value))}}
            />
             <TextInput
            placeholder='Category'
            value={price}
            onChange={(e) => {setPrice(+(e.target.value))}}
            />
            

        </div>
    </div>
  )
}
