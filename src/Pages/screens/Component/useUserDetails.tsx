import axios from 'axios'
import React, { useState } from 'react'
import { userDetails1 } from '../../../initialState'
import { IUserDetails } from '../../../libs/Type'

export default function useUserDetails() {
  const [userId1, setUserId1] = useState<IUserDetails>(
    userDetails1
  )
  const [userId2, setUserId2] = useState<IUserDetails>(
    userDetails1
  )
  const [userId4, setUserId4] = useState<IUserDetails>(
    userDetails1
  )
  const [userId5, setUserId5] = useState<IUserDetails>(
    userDetails1
  )
  const [userId6, setUserId6] = useState<IUserDetails>(
    userDetails1
  )
  const [userId7, setUserId7] = useState<IUserDetails>(
    userDetails1
  )
  const [userId8, setUserId8] = useState<IUserDetails>(
    userDetails1
  )
  const [userId9, setUserId9] = useState<IUserDetails>(
    userDetails1
  )
  const [userId11, setUserId11] = useState<IUserDetails>(
    userDetails1
  )
  const [userId12, setUserId12] = useState<IUserDetails>(
    userDetails1
  )
  const [userId13, setUserId13] = useState<IUserDetails>(
    userDetails1
  )
  const [userId14, setUserId14] = useState<IUserDetails>(
    userDetails1
  )
  const [userId15, setUserId15] = useState<IUserDetails>(
    userDetails1
  )
  const [userId16, setUserId16] = useState<IUserDetails>(
    userDetails1
  )
  const [userId17, setUserId17] = useState<IUserDetails>(
    userDetails1
  )
  const [userId18, setUserId18] = useState<IUserDetails>(
    userDetails1
  )

  const getUserDetails = () => {
    axios.get(`https://dummyjson.com/users/1`).then((res) => {
      console.log("userDetails1: ", res.data)
      setUserId1(res.data)
    })
  }


  const getUserDetailsid2 = () => {
    axios.get(`https://dummyjson.com/users/2`).then((res) => {
      // console.log("userDetails: ", res.data)
      setUserId2(res.data)
    })
  }

  const getUserDetailsid4 = () => {
    axios.get(`https://dummyjson.com/users/4`).then((res) => {
      // console.log("userDetails: ", res.data)
      setUserId4(res.data)
    })
  }

  const getUserDetailsid5 = () => {
    axios.get(`https://dummyjson.com/users/5`).then((res) => {
      // console.log("userDetails: ", res.data)
      setUserId5(res.data)
    })
  }
  const getUserDetailsid6 = () => {
    axios.get(`https://dummyjson.com/users/6`).then((res) => {
      // console.log("userDetails: ", res.data)
      setUserId6(res.data)
    })
  }
  const getUserDetailsid7 = () => {
    axios.get(`https://dummyjson.com/users/7`).then((res) => {
      // console.log("userDetails: ", res.data)
      setUserId7(res.data)
    })
  }
  const getUserDetailsid8 = () => {
    axios.get(`https://dummyjson.com/users/8`).then((res) => {
      // console.log("userDetails: ", res.data)
      setUserId8(res.data)
    })
  }
  const getUserDetailsid9 = () => {
    axios.get(`https://dummyjson.com/users/9`).then((res) => {
      // console.log("userDetails: ", res.data)
      setUserId9(res.data)
    })
  }
  const getUserDetailsid11 = () => {
    axios.get(`https://dummyjson.com/users/11`).then((res) => {
      // console.log("userDetails: ", res.data)
      setUserId11(res.data)
    })

  }

  const getUserDetailsid12 = () => {
    axios.get(`https://dummyjson.com/users/12`).then((res) => {
      // console.log("userDetails: ", res.data)
      setUserId12(res.data)
    })
  }
  const getUserDetailsid13 = () => {
    axios.get(`https://dummyjson.com/users/13`).then((res) => {
      // console.log("userDetails: ", res.data)
      setUserId13(res.data)
    })
  }
  const getUserDetailsid14 = () => {
    axios.get(`https://dummyjson.com/users/14`).then((res) => {
      // console.log("userDetails: ", res.data)
      setUserId14(res.data)
    })
  }
  const getUserDetailsid15 = () => {
    axios.get(`https://dummyjson.com/users/15`).then((res) => {
      // console.log("userDetails: ", res.data)
      setUserId15(res.data)
    })
  }
  const getUserDetailsid16 = () => {
    axios.get(`https://dummyjson.com/users/16`).then((res) => {
      // console.log("userDetails: ", res.data)
      setUserId16(res.data)
    })
  }
  const getUserDetailsid17 = () => {
    axios.get(`https://dummyjson.com/users/17`).then((res) => {
      // console.log("userDetails: ", res.data)
      setUserId17(res.data)
    })
  }
  const getUserDetailsid18 = () => {
    axios.get(`https://dummyjson.com/users/18`).then((res) => {
      console.log("userDetails18: ", res.data)
      setUserId18(res.data)
    })
  }

  return {
    getUserDetails,
    userId1,
    getUserDetailsid2,
    userId2,
    getUserDetailsid4,
    userId4,
    getUserDetailsid5,
    userId5,
    getUserDetailsid6,
    userId6,
    getUserDetailsid7,
    userId7,
    getUserDetailsid8,
    userId8,
    getUserDetailsid9,
    userId9,
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
  }
}
