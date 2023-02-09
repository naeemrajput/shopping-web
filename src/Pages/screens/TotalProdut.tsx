import { Button, FileInput, TextInput, Image, Loader } from '@mantine/core'
import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { IModal } from './Component/Modal'
import ProductComponent from './Component/ProductComponent'
import useTotalProdut from './Component/useTotalProdut'

export default function TotalProdut() {
    const [isFirstLoad, setIsFirtLoad] = useState<boolean>(true)

    const {
        modalOpen,
        PrevPage,
        NextPage,
        pageData,
        handleCancle,
        handleFilesize,
        handleSave,
        getAppProdutDetails,
        currentPage,
        totalPage,
        setModalOpen,
        setTitle,
        title,
        category,
        setCategory,
        price,
        setPrice,
        description,
        setDesription,
        count,
        setCount,
        rate,
        setRate,
        file,
        preview,
        isLoading
    } = useTotalProdut()

    // console.group()
    // console.log("Title: ",title)
    // console.log("Pricwe: ",price)
    // console.log("category",category)
    // console.log("description",description)
    // console.log("count",count)
    // console.log("rating",rating)
    // console.log("file: ",file)
    // console.groupEnd()

    useEffect(() => {
        if (isFirstLoad) {
            setIsFirtLoad(false)
        } else {
            getAppProdutDetails()
        }
    }, [isFirstLoad])



    return (
        <div className='flex gap-6 justify-between flex-wrap'>
              {isLoading ? (
                <div className='flex items-center justify-center w-full h-[800px]'>
                    <Loader size="xl" variant="dots" />
                </div>
            ) : (
            <>
                {pageData.map((item, index) =>
                    <div key={index} className='h-42 w-80 bg-slate-100 rounded-xl'>
                        <ProductComponent
                            id={item?.id}
                            title={item?.title}
                            price={item?.price}
                            description={item?.description}
                            category={item?.category}
                            image={item?.image}
                            rate={item?.rating?.rate}
                            count={item?.rating?.count}
                        />

                    </div>
                )}
            </>
            )}

            <div className='mt-12 mb-12  flex justify-between  w-full'>
                <div className='flex gap-6' >
                    <Button className='bg-green-600'
                        disabled={currentPage === 1}
                        onClick={() => { PrevPage() }}
                    >Prev</Button>{currentPage}
                    <Button className='bg-green-600'
                        disabled={currentPage > totalPage - 1}
                        onClick={() => { NextPage() }}>Next</Button>
                </div>
                <div className=''>
                    <Button className='bg-green-600'
                        onClick={() => { setModalOpen(true) }}
                    >Add Produt</Button>
                </div>
            </div>
            <IModal
                title='Add Product'
                fullScreen={true}
                size="50%"
                isOpen={modalOpen}
                setIsOpen={() => {
                    setModalOpen(false)
                    console.log("single product")
                }}

            >

                <div className=''>
                    <div className='post-data justify-between  flex  '>
                        <TextInput
                            required
                            label="Title"
                            className='w-[45%]'
                            placeholder='Title'
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                        <TextInput
                            required
                            label="Price"
                            className='w-[45%]'
                            placeholder='Price'
                            value={price}
                            onChange={(e) => { setPrice(+(e.target.value)) }}
                        />

                    </div>
                    <div className='post-data mt-12 justify-between  flex  '>
                        <TextInput
                            required
                            label="category"
                            className='w-[45%]'
                            placeholder='Category'
                            value={category}
                            onChange={(e) => { setCategory(e.target.value) }}
                        />
                        <TextInput
                            required
                            label="Description"
                            className='w-[45%]'
                            placeholder='Description'
                            value={description}
                            onChange={(e) => { setDesription(e.target.value) }}
                        />
                    </div>
                    <div className='post-data mt-12 justify-between  flex  '>
                        <TextInput
                            required
                            label="Item count"
                            className='w-[45%]'
                            placeholder='Count'
                            value={count}
                            onChange={(e) => { setCount(+(e.target.value)) }}
                        />
                        <TextInput
                            required
                            label="Rating"
                            className='w-[45%]'
                            placeholder='Rate'
                            value={rate}
                            onChange={(e) => { setRate(+(e.target.value)) }}
                        />
                    </div>
                    <div className='post-data mt-12 justify-between  flex  '>
                        <>
                            <FileInput
                                required
                                placeholder="Pick file"
                                label="File"
                                value={file}
                                onChange={(e: any) => {
                                    handleFilesize(e)
                                }}
                            />
                            <Image
                                radius="md"
                                className='rounded-md '
                                src={preview}
                                width="30" height="30"
                            />
                        </>
                    </div>
                    <div className='mt-12 flex justify-end  gap-6 w-full'>
                        <Button className='bg-red-600'
                            // disabled={currentPage > pageData.length}
                            onClick={() => {
                                setModalOpen(false)
                                handleCancle()
                            }}
                        >Cancle</Button>

                        <Button className='bg-green-600'
                            onClick={() => {
                                handleSave()
                                //  setModalOpen(false)
                            }}
                        >Save</Button>
                    </div>
                </div>
            </IModal>

        </div>
    )
}
