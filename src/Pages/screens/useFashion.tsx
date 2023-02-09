import axios from 'axios'
import React, { useState } from 'react'
import { productDetailParams } from '../../initialState'
import { IProdutDetails } from '../../libs/Type'

export default function useFashion() {

    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [selectedProduct, setSelectedProduct] = useState<IProdutDetails>(
        productDetailParams
    )

    const [id11, setId11] = useState<IProdutDetails>(
        productDetailParams
    )
    const [id12, setId12] = useState<IProdutDetails>(
        productDetailParams
    )
    const [id13, setid13] = useState<IProdutDetails>(
        productDetailParams
    )
    const [id14, setid14] = useState<IProdutDetails>(
        productDetailParams
    )
    const [id15, setid15] = useState<IProdutDetails>(
        productDetailParams
    )
    const [id16, setid16] = useState<IProdutDetails>(
        productDetailParams
    )
    const [id17, setId17] = useState<IProdutDetails>(
        productDetailParams
    )

    const [id18, setid18] = useState<IProdutDetails>(
        productDetailParams
    )

    //HANDLE FUNCTION
    // HANDLE FUNCTION

    const handleClickId11 = () => {
        setModalOpen(true)
        setSelectedProduct(id11)
    }

    const handleClickId12 = () => {
        setModalOpen(true)
        setSelectedProduct(id12)
    }

    const handleClickId13 = () => {
        setModalOpen(true)
        setSelectedProduct(id13)
    }

    const handleClickId14 = () => {
        setModalOpen(true)
        setSelectedProduct(id14)
    }

    const handleClickId15 = () => {
        setModalOpen(true)
        setSelectedProduct(id15)
    }

    const handleClickId16 = () => {
        setModalOpen(true)
        setSelectedProduct(id16)
    }

    const handleClickId17 = () => {
        setModalOpen(true)
        setSelectedProduct(id17)
    }

    const handleClickId18 = () => {
        setModalOpen(true)
        setSelectedProduct(id18)
    }


    // API CALL

    const getProdutID11 = () => {
        axios.get("https://dummyjson.com/products/11").then((res) => {
            console.log("data: ", res.data)
            setId11(res?.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getProdutID12 = () => {
        axios.get("https://dummyjson.com/products/12").then((res) => {
            console.log("data: ", res.data)
            setId12(res?.data)
        }).catch((err) => {
            console.log(err)
        })
    }



    const getProdutID13 = () => {
        axios.get("https://dummyjson.com/products/13").then((res) => {
            console.log("single data: ", res.data)
            setid13(res?.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getProdutID14 = () => {
        axios.get("https://dummyjson.com/products/14").then((res) => {
            console.log("single data: ", res.data)
            setid14(res?.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getProdutID15 = () => {
        axios.get("https://dummyjson.com/products/15").then((res) => {
            console.log("single data: ", res.data)
            setid15(res?.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getProdutID16 = () => {
        axios.get("https://dummyjson.com/products/16").then((res) => {
            console.log("single data: ", res.data)
            setid16(res?.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getProdutID17 = () => {
        axios.get("https://dummyjson.com/products/17").then((res) => {
            console.log("single data: ", res.data)
            setId17(res?.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getProdutID18 = () => {
        axios.get("https://dummyjson.com/products/18").then((res) => {
            console.log("single data: ", res.data)
            setid18(res?.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return {
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
    }
}
