import axios from 'axios'
import React, { useState } from 'react'
import { productDetailParams } from '../../initialState'
import { IProdutDetails } from '../../libs/Type'

export default function useGroceryProduct() {

    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [selectedProduct, setSelectedProduct] = useState<IProdutDetails>(
        productDetailParams
      )

    const [id21, setId21] = useState<IProdutDetails>(
        productDetailParams
    )
    const [id22, setId22] = useState<IProdutDetails>(
        productDetailParams
    )
    const [id23, setid23] = useState<IProdutDetails>(
        productDetailParams
    )
    const [id24, setid24] = useState<IProdutDetails>(
        productDetailParams
    )
    const [id25, setid25] = useState<IProdutDetails>(
        productDetailParams
    )
    const [id26, setid26] = useState<IProdutDetails>(
        productDetailParams
    )
    const [id27, setId27] = useState<IProdutDetails>(
        productDetailParams
    )

    const [id28, setid28] = useState<IProdutDetails>(
        productDetailParams
    )

    // HANDLE FUNCTION

  const handleClickId21 = () => {
    setModalOpen(true)
    setSelectedProduct(id21)
  }

  const handleClickId22 = () => {
    setModalOpen(true)
    setSelectedProduct(id22)
  }

  const handleClickId23 = () => {
    setModalOpen(true)
    setSelectedProduct(id23)
  }

  const handleClickId24 = () => {
    setModalOpen(true)
    setSelectedProduct(id24)
  }

  const handleClickId25 = () => {
    setModalOpen(true)
    setSelectedProduct(id25)
  }

  const handleClickId26 = () => {
    setModalOpen(true)
    setSelectedProduct(id26)
  }

  const handleClickId27 = () => {
    setModalOpen(true)
    setSelectedProduct(id27)
  }

  const handleClickId28 = () => {
    setModalOpen(true)
    setSelectedProduct(id28)
  }


    // API CALL

    const getProdutID21 = () => {
        axios.get("https://dummyjson.com/products/21").then((res) => {
            console.log("data: ", res.data)
            setId21(res?.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getProdutID22 = () => {
        axios.get("https://dummyjson.com/products/30").then((res) => {
            console.log("data: ", res.data)
            setId22(res?.data)
        }).catch((err) => {
            console.log(err)
        })
    }



    const getProdutID23 = () => {
        axios.get("https://dummyjson.com/products/23").then((res) => {
            console.log("single data: ", res.data)
            setid23(res?.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getProdutID24 = () => {
        axios.get("https://dummyjson.com/products/21").then((res) => {
            console.log("single data: ", res.data)
            setid24(res?.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getProdutID25 = () => {
        axios.get("https://dummyjson.com/products/25").then((res) => {
            console.log("single data: ", res.data)
            setid25(res?.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getProdutID26 = () => {
        axios.get("https://dummyjson.com/products/26").then((res) => {
            console.log("single data: ", res.data)
            setid26(res?.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getProdutID27 = () => {
        axios.get("https://dummyjson.com/products/27").then((res) => {
            console.log("single data: ", res.data)
            setId27(res?.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getProdutID28 = () => {
        axios.get("https://dummyjson.com/products/28").then((res) => {
            console.log("single data: ", res.data)
            setid28(res?.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return {
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
    }
}
