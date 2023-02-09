import { Button, Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { productDetailParams } from '../../initialState';
import { IProdutDetails } from '../../libs/Type'
import { IModal } from './Component/Modal';
import useStudent from './useStudent';
import { AiOutlineStar } from 'react-icons/ai';
import Rating from './Component/Rating';
import Card from './Component/cardComponent';
// import IModalItem from './Component/IModalItem';
import useUserDetails from './Component/useUserDetails';
import UserComp from './Component/UserComp';

const Student = () => {
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true)


  const {
    product,
    getProdutDetail,
    singleProdut,
    getSingleProdutDetail,
    modalOpen,
    setModalOpen,
    mobile,
    getMobiledata,
    id5,
    getProdutID5,
    id6,
    getProdutID6,
    id7,
    getProdutID7,
    id8,
    getProdutID8,
    id9,
    getProdutID9,
    setSelectedProduct,
    selectedProduct,
    handleClickId1,
    handleClickId2,
    handleClickId4,
    handleClickId5,
    handleClickId6,
    handleClickId7,
    handleClickId8,
    handleClickId9,
  } = useStudent();

  const {
    userId1,
    getUserDetails,
    getUserDetailsid6,
    userId6,
    getUserDetailsid5,
    userId5,
    getUserDetailsid4,
    userId4,
    getUserDetailsid2,
    userId2,
    getUserDetailsid7,
    userId7,
    getUserDetailsid8,
    userId8,
    getUserDetailsid9,
    userId9,
  } = useUserDetails();

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
    } else {
      getProdutDetail();
      getProdutID6();
      getProdutID7();
      getProdutID8()
      getProdutID9()
      getSingleProdutDetail();
      getMobiledata()
      getProdutID5()
      getUserDetails()
      getUserDetailsid6()
      getUserDetailsid5()
      getUserDetailsid4()
      getUserDetailsid2()
      getUserDetailsid7()
      getUserDetailsid8()
      getUserDetailsid9()
    }
  }, [isFirstLoad]);

  return (
    <div className='flex'>
      <div className='details flex flex-wrap justify-between gap-4 p-1 h-[500px] w-full'>
        <div className='h-42 w-80 bg-slate-100 rounded-xl '>
          <Card
            id={id6?.id}
            handleClick={handleClickId6}
            brand={id6?.brand}
            title={id6?.title}
            description={id6?.description}
            price={id6?.price}
            rating={id6?.rating}
            stock={id6?.stock}
            thumbnail={id6?.thumbnail}
            category={id6?.category} />

        </div>

        <div className='h-42 w-80 bg-slate-100 rounded-xl'>
          <Card
            id={id7?.id}
            handleClick={handleClickId7}
            brand={id7?.brand}
            description={id7?.description}
            price={id7?.price}
            rating={id7?.rating}
            stock={id7?.stock}
            thumbnail={id7?.thumbnail}
            category={id7?.category} />
        </div>


        <div className='h-42 w-80 bg-slate-100 rounded-xl  '>
          <Card
            id={id8?.id}
            handleClick={handleClickId8}
            brand={id8?.brand}
            description={id8?.description}
            price={id8?.price}
            rating={id8?.rating}
            stock={id8?.stock}
            thumbnail={id8?.thumbnail}
            category={id8?.category} />
        </div>


        <div className='h-42 w-80 bg-slate-100 rounded-xl  '>
          <Card
            id={id9?.id}
            handleClick={handleClickId9}
            brand={id9?.brand}
            description={id9?.description}
            price={id9?.price}
            rating={id9?.rating}
            stock={id9?.stock}
            thumbnail={id9?.thumbnail}
            category={id9?.category} />
        </div>


        <div className='h-42 w-80 bg-slate-100 rounded-xl  '>
          <Card
            id={singleProdut?.id}
            handleClick={handleClickId1}
            brand={singleProdut?.brand}
            description={singleProdut?.description}
            price={singleProdut?.price}
            rating={singleProdut?.rating}
            stock={singleProdut?.stock}
            thumbnail={singleProdut?.thumbnail}
            category={singleProdut?.category} />
        </div>

        <div className='h-42 w-80 bg-slate-100 rounded-xl  '>
          <Card
            id={product?.id}
            handleClick={handleClickId2}
            brand={product?.brand}
            description={product?.description}
            price={product?.price}
            rating={product?.rating}
            stock={product?.stock}
            thumbnail={product?.thumbnail}
            category={product?.category} />
        </div>

        <div className='h-42 w-80 bg-slate-100 rounded-xl  '>
          <>
            <Card
              id={mobile?.id}
              handleClick={handleClickId4}
              brand={mobile?.brand}
              description={mobile?.description}
              price={mobile?.price}
              rating={mobile?.rating}
              stock={mobile?.stock}
              thumbnail={mobile?.thumbnail}
              category={mobile?.category} />
          </>
        </div>


        <div className='h-42 w-80 bg-slate-100 rounded-xl '>
          <Card
            id={id5?.id}
            handleClick={handleClickId5}
            brand={id5?.brand}
            description={id5?.description}
            price={id5?.price}
            rating={id5?.rating}
            stock={id5?.stock}
            thumbnail={id5?.thumbnail}
            category={id5?.category} />
        </div>

        {/* <UserComp
          firstName={userId1?.firstName}
          lastName={userId1?.lastName}
          age={userId1?.age}
          gender={userId1?.gender}
          email={userId1?.email}
          phone={userId1?.phone}
          image={userId1?.image}
          address={userId1?.address?.address}
          city={userId1?.address?.city}
          state={userId1?.address?.state}
          userAgent={userId1?.userAgent} /> */}

      </div>

      <IModal
        title={`${selectedProduct?.category.toUpperCase()}: ${selectedProduct?.id} Details`}
        fullScreen={true}
        size="50%"
        isOpen={modalOpen}
        setIsOpen={() => {
          setModalOpen(false)
          console.log("single product")
        }}
      >
        <div className='modal'>
          <div className='  flex flex-col justify-center'>
            {selectedProduct == singleProdut ? (<>
              <Carousel>

                {singleProdut?.images?.map((item, index) => (
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
                firstName={userId1?.firstName}
                lastName={userId1?.lastName}
                age={userId1?.age}
                gender={userId1?.gender}
                email={userId1?.email}
                phone={userId1?.phone}
                image={userId1?.image}
                address={userId1?.address?.address}
                city={userId1?.address?.city}
                state={userId1?.address?.state}
                userAgent={userId1?.userAgent} />
                </div>

            </>) : (<></>)}
          </div>
          {/* <IModalItem product={singleProdut} /> */}

          <div className=' '>
            {selectedProduct == product ? (<>
              <Carousel>

                {product?.images?.map((item, index) => (
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
                firstName={userId2?.firstName}
                lastName={userId2?.lastName}
                age={userId2?.age}
                gender={userId2?.gender}
                email={userId2?.email}
                phone={userId2?.phone}
                image={userId2?.image}
                address={userId2?.address?.address}
                city={userId2?.address?.city}
                state={userId2?.address?.state}
                userAgent={userId2?.userAgent} />
                </div>
            </>) : (<></>)}

          </div>

          <div className=' '>
            {selectedProduct == mobile ? (<>
              <Carousel  >

                {mobile?.images?.map((item, index) => (
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
                firstName={userId4?.firstName}
                lastName={userId4?.lastName}
                age={userId4?.age}
                gender={userId4?.gender}
                email={userId4?.email}
                phone={userId4?.phone}
                image={userId4?.image}
                address={userId4?.address?.address}
                city={userId4?.address?.city}
                state={userId4?.address?.state}
                userAgent={userId4?.userAgent}
                company={userId4?.company?.name}  />
                </div>
            </>) : (<></>)}
          </div>

          <div className=' '>
            {selectedProduct == id5 ? (<>
              <Carousel >
                {id5?.images?.map((item, index) => (
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
                firstName={userId5?.firstName}
                lastName={userId5?.lastName}
                age={userId5?.age}
                gender={userId5?.gender}
                email={userId5?.email}
                phone={userId5?.phone}
                image={userId5?.image}
                address={userId5?.address?.address}
                city={userId5?.address?.city}
                state={userId5?.address?.state}
                userAgent={userId5?.userAgent} />
                </div>
            </>) : (<></>)}
          </div>

          <div className=' '>
            {selectedProduct == id6 ? (<>
              <Carousel >

                {id6?.images?.map((item, index) => (
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
                firstName={userId6?.firstName}
                lastName={userId6?.lastName}
                age={userId6?.age}
                gender={userId6?.gender}
                email={userId6?.email}
                phone={userId6?.phone}
                image={userId6?.image}
                address={userId6?.address?.address}
                city={userId6?.address?.city}
                state={userId6?.address?.state}
                userAgent={userId6?.userAgent} />
                </div>

            </>) : (<></>)}
          </div>

          <div className=' '>
            {selectedProduct == id7 ? (<>
              <Carousel >

                {id7?.images?.map((item, index) => (
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
                firstName={userId7?.firstName}
                lastName={userId7?.lastName}
                age={userId7?.age}
                gender={userId7?.gender}
                email={userId7?.email}
                phone={userId7?.phone}
                image={userId7?.image}
                address={userId7?.address?.address}
                city={userId7?.address?.city}
                state={userId7?.address?.state}
                userAgent={userId7?.userAgent} />
                </div>
            </>) : (<></>)}
          </div>

          <div className=' '>
            {selectedProduct == id8 ? (<>
              <Carousel >

                {id8?.images?.map((item, index) => (
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
                firstName={userId8?.firstName}
                lastName={userId8?.lastName}
                age={userId8?.age}
                gender={userId8?.gender}
                email={userId8?.email}
                phone={userId8?.phone}
                image={userId8?.image}
                address={userId8?.address?.address}
                city={userId8?.address?.city}
                state={userId8?.address?.state}
                userAgent={userId8?.userAgent} />
                </div>
            </>) : (<></>)}
          </div>

          <div className=' '>
            {selectedProduct == id9 ? (<>
              <Carousel >

                {id9?.images?.map((item, index) => (
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
                firstName={userId9?.firstName}
                lastName={userId9?.lastName}
                age={userId9?.age}
                gender={userId9?.gender}
                email={userId9?.email}
                phone={userId9?.phone}
                image={userId9?.image}
                address={userId9?.address?.address}
                city={userId9?.address?.city}
                state={userId9?.address?.state}
                userAgent={userId9?.userAgent} />
                </div>
            </>) : (<></>)}
          </div>

        </div>
      </IModal>
    </div>
  )

}

export default Student