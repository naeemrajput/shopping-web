import React from 'react'
import { Button, Image, Space } from '@mantine/core';
type props = {
    id?: number,
    firstName: string,
    lastName: string,
    maidenName?: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    image: string,
    address: string,
    city: string,
    state: string,
    userAgent: string,
    company?: string
}
export default function UserComp(
    {
        id,
        firstName,
        lastName,
        maidenName,
        age,
        gender,
        email,
        phone,
        image,
        address,
        city,
        state,
        userAgent,
        company
    }: props) {
    return (
        <div className='h-82 w-[700px] p-6 bg-slate-200'>
            <div className='h-32 w-full  flex items-end  p-2 rounded-md justify-center'>
                <div className='h32 w-[60%]'>
                    <p className=''>Full Name : {firstName} {" "}{maidenName}{" "}{lastName}</p>
                    <p className=''>Email : {email}</p>
                    <p className=''>Phone No : {phone}</p>
                    <p className=''>Age : {age}</p>
                </div>
                <div className='h-32 flex items-center w-[40%]'>
                    <Image
                        alt='lll'
                        src={image}
                    />
                </div>
            </div>
            <Space h="md" />
            <div className='h-32 w-full p-2 rounded-md  '>
                <p className=''>Address : {address}</p>
                <p className=''>City : {city}</p>
                <p className=''>State: {state}</p>
                <p className=''>User Agent : {userAgent}</p>
                <p className=''>Company : {company}</p>
            </div>
            {/* 
             <Image
                alt='lll'
                src={image}
                ></Image>
      </p> */}
        </div>
    )
}
