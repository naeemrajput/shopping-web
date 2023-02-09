import { Button, Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import React, { useEffect, useState } from 'react'
import { productDetailParams } from '../../initialState';
import { IProdutDetails } from '../../libs/Type'
import { IModal } from './Component/Modal';
import { AiOutlineStar } from 'react-icons/ai';
import useGroceryProduct from './useGroceryProdut';
import Card from './Component/cardComponent';

const GroceryProduct = () => {
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true)

  const {
    modalOpen,
    setModalOpen,
    id21,
    getProdutID21,
    id22,
    getProdutID22,
    id23,
    getProdutID23,
    id24,
    getProdutID24,
    id25,
    getProdutID25,
    id26,
    getProdutID26,
    id27,
    getProdutID27,
    id28,
    getProdutID28,
    selectedProduct,
    handleClickId21,
    handleClickId22,
    handleClickId23,
    handleClickId24,
    handleClickId25,
    handleClickId26,
    handleClickId27,
    handleClickId28
  } = useGroceryProduct();

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
    } else {
        getProdutID21();
        getProdutID22();
        getProdutID23()
        getProdutID24();
        getProdutID25()
        getProdutID26();
        getProdutID27()
        getProdutID28()
    }
  }, [isFirstLoad]);

 


  return (
    <div className='flex'>
      <div className='details flex flex-wrap justify-between gap-4 p-1 h-[500px] w-full'>
        <div className=''>
        <Card
            id={id21?.id}
            handleClick={handleClickId21}
            brand={id21?.brand}
            description={id21?.description}
            price={id21?.price}
            rating={id21?.rating}
            stock={id21?.stock}
            thumbnail={id21?.thumbnail}
            category={id21?.category}  />
        </div>

        <div className=' '>
        <Card
            id={id22?.id}
            handleClick={handleClickId22}
            brand={id22?.brand}
            description={id22?.description}
            price={id22?.price}
            rating={id22?.rating}
            stock={id22?.stock}
            thumbnail={id22?.thumbnail}
            category={id22?.category}  />
        </div>


        <div className=''>
        <Card
            id={id23?.id}
            handleClick={handleClickId23}
            brand={id23?.brand}
            description={id23?.description}
            price={id23?.price}
            rating={id23?.rating}
            stock={id23?.stock}
            thumbnail={id23?.thumbnail}
            category={id23?.category}  />
        </div>


        <div className=''>
        <Card
            id={id24?.id}
            handleClick={handleClickId24}
            brand={id24?.brand}
            description={id24?.description}
            price={id24?.price}
            rating={id24?.rating}
            stock={id24?.stock}
            thumbnail={id24?.thumbnail}
            category={id24?.category}  />
        </div>


        <div className=''>
        <Card
            id={id25?.id}
            handleClick={handleClickId25}
            brand={id25?.brand}
            description={id25?.description}
            price={id25?.price}
            rating={id25?.rating}
            stock={id25?.stock}
            thumbnail={id25?.thumbnail}
            category={id25?.category}  />   
                 </div>



        <div className=''>
        <Card
            id={id26?.id}
            handleClick={handleClickId26}
            brand={id26?.brand}
            description={id26?.description}
            price={id26?.price}
            rating={id26?.rating}
            stock={id26?.stock}
            thumbnail={id26?.thumbnail}
            category={id26?.category}  />
        </div>

        <div className=''>
        <Card
            id={id27?.id}
            handleClick={handleClickId27}
            brand={id27?.brand}
            description={id27?.description}
            price={id27?.price}
            rating={id27?.rating}
            stock={id27?.stock}
            thumbnail={id27?.thumbnail}
            category={id27?.category}  />
        </div>


        <div className=''>
        <Card
            id={id28?.id}
            handleClick={handleClickId28}
            brand={id28?.brand}
            description={id28?.description}
            price={id28?.price}
            rating={id28?.rating}
            stock={id28?.stock}
            thumbnail={id28?.thumbnail}
            category={id28?.category}  />
        </div>

      </div>

      <IModal
        title={`${selectedProduct?.category} details`}
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
            {selectedProduct == id21 ? (<>
              <Carousel>

                {id21?.images?.map((item, index) => (
                  <Carousel.Slide>
                    <div key={index} className='flex flex-wrap h-42 items-center justify-center'>
                      <Image
                        src={item}
                      />
                    </div>
                  </Carousel.Slide>
                ))}


                {/* <Carousel.Slide>2</Carousel.Slide>
                    <Carousel.Slide>3</Carousel.Slide> */}
                {/* ...other slides */}
              </Carousel>
            </>) : (<></>)}
          </div>

          <div className=' '>
            {selectedProduct == id22 ? (<>
              <Carousel>

                {id22?.images?.map((item, index) => (
                  <Carousel.Slide>
                    <div key={index} className='flex flex-wrap h-42 items-center justify-center'>
                      <Image
                        src={item}
                      />
                    </div>
                  </Carousel.Slide>
                ))}


                {/* <Carousel.Slide>2</Carousel.Slide>
                    <Carousel.Slide>3</Carousel.Slide> */}
                {/* ...other slides */}
              </Carousel>
            </>) : (<></>)}

          </div>

          <div className=' '>
            {selectedProduct == id23 ? (<>
              <Carousel  >

                {id23?.images?.map((item, index) => (
                  <Carousel.Slide>
                    <div key={index} className='flex flex-wrap h-42 items-center justify-center'>
                      <Image
                        src={item}
                      />
                    </div>
                  </Carousel.Slide>
                ))}


                {/* <Carousel.Slide>2</Carousel.Slide>
                    <Carousel.Slide>3</Carousel.Slide> */}
                {/* ...other slides */}
              </Carousel>
            </>) : (<></>)}
          </div>

          <div className=' '>
            {selectedProduct == id24 ? (<>
              <Carousel >

                {id24?.images?.map((item, index) => (
                  <Carousel.Slide>
                    <div key={index} className='flex flex-wrap h-42 items-center justify-center'>
                      <Image
                        src={item}
                      />
                    </div>
                  </Carousel.Slide>
                ))}


                {/* <Carousel.Slide>2</Carousel.Slide>
                    <Carousel.Slide>3</Carousel.Slide> */}
                {/* ...other slides */}
              </Carousel>
            </>) : (<></>)}
          </div>

          <div className=' '>
            {selectedProduct == id25 ? (<>
              <Carousel >

                {id25?.images?.map((item, index) => (
                  <Carousel.Slide>
                    <div key={index} className='flex flex-wrap h-42 items-center justify-center'>
                      <Image
                        src={item}
                      />
                    </div>
                  </Carousel.Slide>
                ))}


                {/* <Carousel.Slide>2</Carousel.Slide>
                    <Carousel.Slide>3</Carousel.Slide> */}
                {/* ...other slides */}
              </Carousel>
            </>) : (<></>)}
          </div>

          <div className=' '>
            {selectedProduct == id26 ? (<>
              <Carousel >

                {id26?.images?.map((item, index) => (
                  <Carousel.Slide>
                    <div key={index} className='flex flex-wrap h-42 items-center justify-center'>
                      <Image
                        src={item}
                      />
                    </div>
                  </Carousel.Slide>
                ))}


                {/* <Carousel.Slide>2</Carousel.Slide>
                    <Carousel.Slide>3</Carousel.Slide> */}
                {/* ...other slides */}
              </Carousel>
            </>) : (<></>)}
          </div>

          <div className=' '>
            {selectedProduct == id27 ? (<>
              <Carousel >

                {id27?.images?.map((item, index) => (
                  <Carousel.Slide>
                    <div key={index} className='flex flex-wrap h-42 items-center justify-center'>
                      <Image
                        src={item}
                      />
                    </div>
                  </Carousel.Slide>
                ))}


              </Carousel>
            </>) : (<></>)}
          </div>

          <div className=' '>
            {selectedProduct == id28 ? (<>
              <Carousel >

                {id28?.images?.map((item, index) => (
                  <Carousel.Slide>
                    <div key={index} className='flex flex-wrap h-42 items-center justify-center'>
                      <Image
                        src={item}
                      />
                    </div>
                  </Carousel.Slide>
                ))}

              </Carousel>
            </>) : (<></>)}
          </div>

        </div>
      </IModal>
    </div>
  )

}

export default GroceryProduct