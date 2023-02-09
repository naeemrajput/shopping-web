import { Button, Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { productDetailParams } from '../../initialState';
import { IProdutDetails } from '../../libs/Type'
import { IModal } from './Component/Modal';
import useStudent from './useStudent';
import { AiOutlineStar } from 'react-icons/ai';
import useFashion from './useFashion';
import Card from './Component/cardComponent';
import UserComp from './Component/UserComp';
import useUserDetails from './Component/useUserDetails';

const Fashion = () => {
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true)
  // const [selectedProduct, setSelectedProduct] = useState<IProdutDetails>(
  //   productDetailParams
  // )

  const {
    modalOpen,
    setModalOpen,
    id11,
    getProdutID11,
    id12,
    getProdutID12,
    id13,
    getProdutID13,
    id14,
    getProdutID14,
    id15,
    getProdutID15,
    id16,
    getProdutID16,
    id17,
    getProdutID17,
    id18,
    getProdutID18,
    handleClickId11,
    handleClickId12,
    handleClickId13,
    handleClickId14,
    handleClickId15,
    handleClickId16,
    handleClickId17,
    handleClickId18,
    selectedProduct
  } = useFashion();

  const {
    getUserDetailsid11,
    userId11,
    getUserDetailsid12,
    userId12,
    getUserDetailsid13,
    userId13,
    getUserDetailsid14,
    userId14,
    getUserDetailsid15,
    userId15,
    getUserDetailsid16,
    userId16,
    getUserDetailsid17,
    userId17,
    getUserDetailsid18,
    userId18
  } = useUserDetails()

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
    } else {
      getProdutID11()
      getProdutID12()
      getProdutID13()
      getProdutID14()
      getProdutID15()
      getProdutID16()
      getProdutID17()
      getProdutID18()
      
    }
  }, [isFirstLoad]);

  
  useEffect(() =>{
    getUserDetailsid11()
    getUserDetailsid12()
    getUserDetailsid13()
    getUserDetailsid14()
    getUserDetailsid15()
    getUserDetailsid16()
    getUserDetailsid16()
    getUserDetailsid17()
    getUserDetailsid18()
  },[])




  // const handleClickId18 = () => {
  //   setModalOpen(true)
  //   setSelectedProduct(id18)
  // }


  return (
    <div className='flex'>
      <div className='details flex flex-wrap justify-between gap-4 p-1 h-[500px] w-full'>
        <div className='h-42 w-80 bg-slate-100 rounded-xl   '>
          <Card
            id={id11?.id}
            handleClick={handleClickId11}
            brand={id11?.brand}
            description={id11?.description}
            price={id11?.price}
            rating={id11?.rating}
            stock={id11?.stock}
            thumbnail={id11?.thumbnail}
            category={id11?.category} />
        </div>

        <div className='h-42 w-80 bg-slate-100 rounded-xl   '>
          <Card
            id={id12?.id}
            handleClick={handleClickId12}
            brand={id12?.brand}
            description={id12?.description}
            price={id12?.price}
            rating={id12?.rating}
            stock={id12?.stock}
            thumbnail={id12?.thumbnail}
            category={id12?.category} />
        </div>


        <div className='h-42 w-80 bg-slate-100 rounded-xl  '>
          <Card
            id={id13?.id}
            handleClick={handleClickId13}
            brand={id13?.brand}
            description={id13?.description}
            price={id13?.price}
            rating={id13?.rating}
            stock={id13?.stock}
            thumbnail={id13?.thumbnail}
            category={id13?.category} />
        </div>


        <div className='h-42 w-80 bg-slate-100 rounded-xl  '>
          <Card
            id={id14?.id}
            handleClick={handleClickId14}
            brand={id14?.brand}
            description={id14?.description}
            price={id14?.price}
            rating={id14?.rating}
            stock={id14?.stock}
            thumbnail={id14?.thumbnail}
            category={id14?.category} />
        </div>


        <div className='h-42 w-80 bg-slate-100 rounded-xl  '>
          <Card
            id={id15?.id}
            handleClick={handleClickId15}
            brand={id15?.brand}
            description={id15?.description}
            price={id15?.price}
            rating={id15?.rating}
            stock={id15?.stock}
            thumbnail={id15?.thumbnail}
            category={id15?.category} />
        </div>



        <div className='h-42 w-80 bg-slate-100 rounded-xl  '>
          <Card
            id={id16?.id}
            handleClick={handleClickId16}
            brand={id16?.brand}
            description={id16?.description}
            price={id16?.price}
            rating={id16?.rating}
            stock={id16?.stock}
            thumbnail={id16?.thumbnail}
            category={id16?.category} />
        </div>

        <div className='h-42 w-80 bg-slate-100 rounded-xl  '>
          <Card
            id={id17?.id}
            handleClick={handleClickId17}
            brand={id17?.brand}
            description={id17?.description}
            price={id17?.price}
            rating={id17?.rating}
            stock={id17?.stock}
            thumbnail={id17?.thumbnail}
            category={id17?.category} />
        </div>


        <div className='h-42 w-80 bg-slate-100 rounded-xl '>
          <Card
            id={id18?.id}
            handleClick={handleClickId18}
            brand={id18?.brand}
            description={id18?.description}
            price={id18?.price}
            rating={id18?.rating}
            stock={id18?.stock}
            thumbnail={id18?.thumbnail}
            category={id18?.category} />
        </div>

      </div>

      <IModal
        title={`${selectedProduct?.category}: ${selectedProduct?.id} details`}
        fullScreen={true}
        size="50%"
        isOpen={modalOpen}
        setIsOpen={() => {
          setModalOpen(false)
          console.log("single product")
        }}
      >
        <div className='modal '>
          <div className=' '>
            {selectedProduct == id11 ? (<>
              <Carousel>

                {id11?.images?.map((item, index) => (
                  <Carousel.Slide>
                    <div key={index} className='flex flex-wrap h-42 items-center justify-center'>
                      <Image
                        src={item}
                      />
                    </div>
                  </Carousel.Slide>
                ))}

              </Carousel>
              <div className='ml-12'>
                <UserComp
                  firstName={userId11?.firstName}
                  lastName={userId11?.lastName}
                  age={userId11?.age}
                  gender={userId11?.gender}
                  email={userId11?.email}
                  phone={userId11?.phone}
                  image={userId11?.image}
                  address={userId11?.address?.address}
                  city={userId11?.address?.city}
                  state={userId11?.address?.state}
                  userAgent={userId11?.userAgent} />
              </div>
            </>) : (<></>)}
          </div>

          <div className=' '>
            {selectedProduct == id12 ? (<>
              <Carousel>

                {id12?.images?.map((item, index) => (
                  <Carousel.Slide>
                    <div key={index} className='flex flex-wrap h-42 items-center justify-center'>
                      <Image
                        src={item}
                      />
                    </div>
                  </Carousel.Slide>
                ))}

              </Carousel>
              <div className='ml-12'>
                <UserComp
                  firstName={userId12?.firstName}
                  lastName={userId12?.lastName}
                  age={userId12?.age}
                  gender={userId12?.gender}
                  email={userId12?.email}
                  phone={userId12?.phone}
                  image={userId12?.image}
                  address={userId12?.address?.address}
                  city={userId12?.address?.city}
                  state={userId12?.address?.state}
                  userAgent={userId12?.userAgent} />
              </div>
            </>) : (<></>)}

          </div>

          <div className=' '>
            {selectedProduct == id13 ? (<>
              <Carousel  >

                {id13?.images?.map((item, index) => (
                  <Carousel.Slide>
                    <div key={index} className='flex flex-wrap h-42 items-center justify-center'>
                      <Image
                        src={item}
                      />
                    </div>
                  </Carousel.Slide>
                ))}

              </Carousel>
              <div className='ml-12'>
                <UserComp
                  firstName={userId13?.firstName}
                  lastName={userId13?.lastName}
                  age={userId13?.age}
                  gender={userId13?.gender}
                  email={userId13?.email}
                  phone={userId13?.phone}
                  image={userId13?.image}
                  address={userId13?.address?.address}
                  city={userId13?.address?.city}
                  state={userId13?.address?.state}
                  userAgent={userId13?.userAgent} />
              </div>
            </>) : (<></>)}
          </div>

          <div className=' '>
            {selectedProduct == id14 ? (<>
              <Carousel >

                {id14?.images?.map((item, index) => (
                  <Carousel.Slide>
                    <div key={index} className='flex flex-wrap h-42 items-center justify-center'>
                      <Image
                        src={item}
                      />
                    </div>
                  </Carousel.Slide>
                ))}

              </Carousel>
              <div className='ml-12'>
                <UserComp
                  firstName={userId14?.firstName}
                  lastName={userId14?.lastName}
                  age={userId14?.age}
                  gender={userId14?.gender}
                  email={userId14?.email}
                  phone={userId14?.phone}
                  image={userId14?.image}
                  address={userId14?.address?.address}
                  city={userId14?.address?.city}
                  state={userId14?.address?.state}
                  userAgent={userId14?.userAgent} />
              </div>
            </>) : (<></>)}
          </div>

          <div className=' '>
            {selectedProduct == id15 ? (<>
              <Carousel >

                {id15?.images?.map((item, index) => (
                  <Carousel.Slide>
                    <div key={index} className='flex flex-wrap h-42 items-center justify-center'>
                      <Image
                        src={item}
                      />
                    </div>
                  </Carousel.Slide>
                ))}

              </Carousel>
              <div className='ml-12'>
                <UserComp
                  firstName={userId15?.firstName}
                  lastName={userId15?.lastName}
                  age={userId15?.age}
                  gender={userId15?.gender}
                  email={userId15?.email}
                  phone={userId15?.phone}
                  image={userId15?.image}
                  address={userId15?.address?.address}
                  city={userId15?.address?.city}
                  state={userId15?.address?.state}
                  userAgent={userId15?.userAgent} />
              </div>
            </>) : (<></>)}
          </div>

          <div className=' '>
            {selectedProduct == id16 ? (<>
              <Carousel >

                {id16?.images?.map((item, index) => (
                  <Carousel.Slide>
                    <div key={index} className='flex flex-wrap h-42 items-center justify-center'>
                      <Image
                        src={item}
                      />
                    </div>
                  </Carousel.Slide>
                ))}

              </Carousel>
              <div className='ml-12'>
                <UserComp
                  firstName={userId16?.firstName}
                  lastName={userId16?.lastName}
                  age={userId16?.age}
                  gender={userId16?.gender}
                  email={userId16?.email}
                  phone={userId16?.phone}
                  image={userId16?.image}
                  address={userId16?.address?.address}
                  city={userId16?.address?.city}
                  state={userId16?.address?.state}
                  userAgent={userId16?.userAgent} />
              </div>
            </>) : (<></>)}
          </div>

          <div className=' '>
            {selectedProduct == id17 ? (<>
              <Carousel >

                {id17?.images?.map((item, index) => (
                  <Carousel.Slide>
                    <div key={index} className='flex flex-wrap h-42 items-center justify-center'>
                      <Image
                        src={item}
                      />
                    </div>
                  </Carousel.Slide>
                ))}

              </Carousel>
              <div className='ml-12'>
                <UserComp
                  firstName={userId17?.firstName}
                  lastName={userId17?.lastName}
                  age={userId17?.age}
                  gender={userId17?.gender}
                  email={userId17?.email}
                  phone={userId17?.phone}
                  image={userId17?.image}
                  address={userId17?.address?.address}
                  city={userId17?.address?.city}
                  state={userId17?.address?.state}
                  userAgent={userId17?.userAgent} />
              </div>
            </>) : (<></>)}
          </div>

          <div className=' '>
            {selectedProduct == id18 ? (<>
              <Carousel >

                {id18?.images?.map((item, index) => (
                  <Carousel.Slide>
                    <div key={index} className='flex flex-wrap h-42 items-center justify-center'>
                      <Image
                        src={item}
                      />
                    </div>
                  </Carousel.Slide>
                ))}

              </Carousel>
              <div className='ml-12'>
                <UserComp
                  firstName={userId18?.firstName}
                  lastName={userId18?.lastName}
                  age={userId18?.age}
                  gender={userId18?.gender}
                  email={userId18?.email}
                  phone={userId18?.phone}
                  image={userId18?.image}
                  address={userId18?.address?.address}
                  city={userId18?.address?.city}
                  state={userId18?.address?.state}
                  userAgent={userId18?.userAgent} />
              </div>
            </>) : (<></>)}
          </div>

        </div>
      </IModal>
    </div>
  )

}

export default Fashion