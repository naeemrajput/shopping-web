import React, { useState } from 'react'
import axios from 'axios'
import { productDetailParams } from '../../initialState'
import { IProdutDetails } from '../../libs/Type'

export default function useStudent() {
  
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [selectedProduct, setSelectedProduct] = useState<IProdutDetails>(
    productDetailParams
  )
  const [mobile, setMobile] = useState<IProdutDetails>(
    productDetailParams
  )
  const [id6, setid6] = useState<IProdutDetails>(
    productDetailParams
  )
  const [id7, setid7] = useState<IProdutDetails>(
    productDetailParams
  )
  const [id8, setid8] = useState<IProdutDetails>(
    productDetailParams
  )
  const [id9, setid9] = useState<IProdutDetails>(
    productDetailParams
  )
  const [id5, setid5] = useState<IProdutDetails>(
    productDetailParams
  )
  const [product, setProduct] = useState<IProdutDetails>(
    productDetailParams
  )
  const [singleProdut, setSingleProduct] = useState<IProdutDetails>(
    productDetailParams
  )

  // HANDLE FUNCTION

  const handleClickId6 = () => {
    setModalOpen(true)
    setSelectedProduct(id6)
  }

  const handleClickId7 = () => {
    setModalOpen(true)
    setSelectedProduct(id7)
  }

  const handleClickId8 = () => {
    setModalOpen(true)
    setSelectedProduct(id8)
  }

  const handleClickId9 = () => {
    setModalOpen(true)
    setSelectedProduct(id9)
  }

  const handleClickId1 = () => {
    setModalOpen(true)
    setSelectedProduct(singleProdut)
  }

  const handleClickId2 = () => {
    setModalOpen(true)
    setSelectedProduct(product)
  }

  const handleClickId4 = () => {
    setModalOpen(true)
    setSelectedProduct(mobile)
  }

  const handleClickId5 = () => {
    setModalOpen(true)
    setSelectedProduct(id5)
  }

  // API CALL

  const getSingleProdutDetail = () => {
    axios.get("https://dummyjson.com/products/2")
    .then((res) => {
      console.log("data: ", res.data)
      setProduct(res?.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const getMobiledata = () => {
    axios.get("https://dummyjson.com/products/4").then((res) => {
      console.log("data: ", res.data)
      setMobile(res?.data)
    }).catch((err) => {
      console.log(err)
    })
  }



  const getProdutDetail = () => {
    axios.get("https://dummyjson.com/products/1").then((res) => {
      console.log("single data: ", res.data)
      setSingleProduct(res?.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const getProdutID5 = () => {
    axios.get("https://dummyjson.com/products/5").then((res) => {
      console.log("single data: ", res.data)
      setid5(res?.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const getProdutID6 = () => {
    axios.get("https://dummyjson.com/products/6").then((res) => {
      console.log("single data: ", res.data)
      setid6(res?.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const getProdutID7 = () => {
    axios.get("https://dummyjson.com/products/7").then((res) => {
      console.log("single data: ", res.data)
      setid7(res?.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const getProdutID8 = () => {
    axios.get("https://dummyjson.com/products/8").then((res) => {
      console.log("single data: ", res.data)
      setid8(res?.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const getProdutID9 = () => {
    axios.get("https://dummyjson.com/products/9").then((res) => {
      console.log("single data: ", res.data)
      setid9(res?.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  
  return {
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
    selectedProduct,
    setSelectedProduct,
    handleClickId1,
    handleClickId2,
    handleClickId4,
    handleClickId5,
    handleClickId6,
    handleClickId7,
    handleClickId8,
    handleClickId9

  }
}
