import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { IFashion, IProdutUpload } from '../../../libs/Type';
import { showToast } from '../../../utils/utility';
import { handleValidateAddProductDetails } from './Validator';

export default function useTotalProdut() {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [product, setProduct] = useState<IFashion[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [title, setTitle] = useState<string>('')
    const [price, setPrice] = useState<number | undefined>(undefined)
    const [count, setCount] = useState<number | undefined>(undefined)
    const [rate, setRate] = useState<number | undefined>(undefined)
    const [category, setCategory] = useState<string>('')
    const [description, setDesription] = useState<string>('')
    const [file, setFile] = useState<File | null>()
    const [preview, setPreview] = useState<string | null>('')
    // console.log("file", file?.type)

    useEffect(() => {
        if (!file) {
            setPreview(null)
            return
        }

        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [file])

    const getAppProdutDetails = () => {
        axios.get(`https://fakestoreapi.com/products`).then((res) => {
            setProduct(res?.data)
            setIsLoading(false)
            // console.log("all", res?.data)
        }).catch((err) => {
            console.log("Error for Api", err)
        })
    }



    // const getAppProdutDetails = () => {
    //     axios.get(`https://dummyjson.com/products`).then((res) => {
    //         setProdut(res?.data?.products)
    //         console.log("all", res?.data)
    //     }).catch((err) => {
    //         console.log("Error for Api", err)
    //     })
    // }


    // HANDLE FUNTION

    const handleCancle = () => {
        setCategory('')
        setCount(0)
        setDesription('')
        setFile(undefined)
        setPrice(0)
        setTitle('')
        setRate(0)
    }

    const handleSave = () => {
        setIsLoading(true)

        // const objectUrl = URL.createObjectURL(file)
        const payload: IProdutUpload = {
            title: title,
            rate: rate,
            category: category,
            description: description,
            count: count,
            price: price,
        }

        const isValidated = handleValidateAddProductDetails(payload);
        const formData = new FormData();
        formData.append("formData", preview ? preview : '');
        console.log("formData", preview)
        if (isValidated) {
            axios.post('https://fakestoreapi.com/products',formData
                // {
                //     // headers: {
                //     //     // 'Content-Type': 'application/json',
                //     //     'content-type': 'multipart/form-data',
                //     // },
                //     // payload,
                //         formData
                // },
            ).then((res) => {
                console.log("Responce for Api: ", res?.data)
            }).catch((err) => {
                console.log("Error for Api: ", err)
            })
            setModalOpen(false)
            handleCancle()
        }
        setIsLoading(false)
    }

    const handleFilesize = (e: any) => {
        let img = new Image()
        img.src = window.URL.createObjectURL(e)
        img.onload = () => {
            console.log("height", img.height, "width", img.width)
            {
                (img.height === 300 && img.width === 300 && (file?.size ? file?.size < 204800 : 204800)) ? setFile(e) : showToast({
                    type: "warning",
                    message: `Please provide Image  300 x 300 size `
                });
            }
        }
        setFile(null)
    }



    const pageData = useMemo(() => {
        return product.slice((currentPage - 1) * 8, ((currentPage - 1) * 8) + 8)
    }, [product, currentPage])

    const NextPage = () => {
        setCurrentPage(prev => prev + 1)
    }

    const PrevPage = () => {
        setCurrentPage(prev => prev > 1 ? prev - 1 : prev)
    }
    const totalPage = product ? Math.ceil(product.length / 8) : 0;


    return {
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
        title,
        setTitle,
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
        isLoading,
        preview,
        // formData
    }
}
