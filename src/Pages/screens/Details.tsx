import React, { useEffect, useMemo, useState } from 'react'
import axios from "axios";
import { Button, Input, Loader } from '@mantine/core';
// import moment from "moment"
import { showToast } from '../../utils/utility';
import { SCategory } from '../../Type';
import moment from 'moment';
// import { getSpaceXData } from '../components/Api';
// import Form from './Demo/Form';

const pageSize = 10;
const Deatils = () => {
    const [spacexData, setSpacexData] = useState<SCategory[]>([]);
    const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true)
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [jumpPage, setJumpPage] = useState<number>(0)




    useEffect(() => {
        if (isFirstLoad) {
            setIsFirstLoad(false);
        } else {
            getListAPiData();
        }
    }, [isFirstLoad]);

    const getListAPiData = async () => {
        axios.get("https://api.spacexdata.com/v3/launches").then(async res => {
            // console.log(res?.data)
            setSpacexData(res?.data)
            setLoading(false)
        }).catch(err => {
            console.log("error to api", err)
        })
    }

   


    // const fetchApiDelete = () => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
    //         method: 'DELETE',
    //     }).then((res) => {
    //         return res.json();
    //     }).then((data) => {
    //         console.log("data: ", data)
    //         setSpacexData(data)
    //         setLoading(false)
    //     }).catch((err) => {
    //         console.log("error to Api: ", err)
    //     })
    // }
    // const fetchApi = () => {
    //     fetch(`https://api.spacexdata.com/v3/launches`, {
    //         method: 'GET',
    //         cache: 'no-cache',
    //     }).then((res) => {
    //         return res.json();
    //     }).then((data) => {
    //         console.log("data: ", data)
    //         setSpacexData(data)
    //         setLoading(false)
    //     }).catch((err) => {
    //         console.log("error to Api: ", err)
    //     })
    // }

    // const postApi = () => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts`, {
    //         method: 'POST',
    //         // headers: {
    //         //     'Content-type': 'application/json'
    //         // },
    //         body: JSON.stringify({
    //             "userId": 11,
    //             "id": 101,
    //             "title": "at nam consequatur ea labore ea harum",
    //             // "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
    //         })
    //     }).then((res) => {
    //         return res.json();
    //     }).then((data) => {
    //         console.log("put data",data)
    //     }).catch((err) => {
    //         console.log("error to log: ",err)
    //     })
    // }

    // const putApi = () => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
    //         method: 'PUT',
    //         // headers: {
    //         //     'Content-type': 'application/json'
    //         // },
    //         body: JSON.stringify({
    //             "userId": 11,
    //             "id": 101,
    //             "title": "at nam consequatur ea labore ea harum",
    //             // "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
    //         })
    //     }).then((res) => {
    //         return res.json();
    //     }).then((data) => {
    //         console.log("post data",data)
    //     }).catch((err) => {
    //         console.log("error to log: ",err)
    //     })
    // }

    // Get current Page

    const pageData = useMemo(() => {
        return spacexData.slice((currentPage - 1) * 10, ((currentPage - 1) * 10) + 10)
    }, [spacexData, currentPage])


    const goToPage = () => {
        if (jumpPage === currentPage) {
            return null
        }
        else if (jumpPage < 1) {
            showToast({
                type: "error",
                title: "Something Went Wrong!",
                message: "please enter currect input! "
            });
        }
        else if (jumpPage > pageCount) {
            showToast({
                type: "error",
                title: "Something Went Wrong!",
                message: "please enter currect input! "
            });
        } else {
            setCurrentPage(+(jumpPage))
        }
    }
    const nextPage = () => {
        setCurrentPage(prev => prev + 1)
    }

    const prevPage = () => {
        setCurrentPage(prev => prev > 1 ? prev - 1 : prev)
    }
    const pageCount = spacexData ? Math.ceil((spacexData.length) / 10) : 0;

    return (
        <div className='e-table w-full border-w-1 p-6'>
            {loading ? (
                <div className='flex items-center justify-center w-full h-[800px]'>
                    <Loader size="xl" variant="dots" />
                </div>
            ) : (
                <>
                    <div className=' flex items-center justify-center'>
                        <h2 className='text-2xl text-green-700 mt-4 font-bold h-16'>Flight Launches Deatils of SpaceX</h2>
                    </div>
                    <table className='table  border-2' >
                        <thead>
                            <tr className='border-2'>
                                <th className='border-2' scope="col" >Flight Number</th>
                                <th className='border-2' scope="col">Mission Name</th>
                                <th className='border-2' scope="col">Launch Date</th>
                                <th className='border-2' scope="col">Launch site fullname</th>
                                <th className='border-2' scope="col">artical link </th>
                                <th className='border-2' scope="col">video link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pageData.map((item: any, index: any) =>
                                <tr key={index} >
                                    <td className='border-2'>{item?.flight_number}</td>
                                    <td className='border-2'>{item?.mission_name}</td>
                                    <td className='border-2'>{moment(item?.launch_date_local, "YY-MM-DD").format("DD-MM-YYYY")}</td>
                                    <td className='border-2'>{item?.launch_site?.site_name_long}</td>
                                    <td className='border-2'><a href={item?.links?.article_link} target="_blank">{item?.links?.article_link}</a></td>
                                    <td className='border-2'><a href={item?.links?.video_link} target="_blank">{item?.links?.video_link}</a></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className=' flex items-center justify-center'>
                        <h2 className='text-2xl text-black-700 mt-4 font-bold h-16'>Flight Launches Deatils of SpaceX</h2>
                    </div>
                    <table className='table  border-2' >
                        <thead>
                            <tr className='border-2'>
                                <th className='border-2' scope="col" >Flight Number</th>

                                <th className='border-2' scope="col">detail </th>
                            </tr>
                        </thead>
                        <tbody>
                            {pageData.map((item: any, index: any) =>
                                <tr key={index} >
                                    <td className='border-2'>{item?.flight_number}</td>

                                    <td className='border-2'> {item?.details} </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className=' flex items-center justify-center'>
                        <h2 className='text-2xl text-blue-700 mt-4 font-bold text-black-600 h-16'>Flight Launches Deatils of SpaceX</h2>
                    </div>
                    <div className='flex justify-center'>
                        <table className='table flex border-2' >
                            <thead>
                                <tr className='border-2'>
                                    <th className='border-2' scope="col" >Flight Number</th>
                                    <th className='border-2' scope="col">Launch site id</th>
                                    <th className='border-2' scope="col">Launch site name</th>
                                    <th className='border-2' scope="col">Launch Date utc</th>
                                    <th className='border-2' scope="col">Launch Date unix</th>
                                    <th className='border-2' scope="col">Launch failure detail </th>
                                    <th className='border-2' scope="col">wikipedia</th>
                                    <th className='border-2' scope="col">TimeLine</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pageData.map((item: any, index: any) =>
                                    <tr key={index} >
                                        <td className='border-2'>{item?.flight_number}</td>
                                        <td className='border-2'>{item?.launch_site?.site_id}</td>
                                        <td className='border-2'>{item?.launch_site?.site_name}</td>
                                        <td className='border-2'>{moment(item?.static_fire_date_utc, "YYYY-MM-DD").format("DD-MM-YYYY")}</td>
                                        <td className='border-2'>{moment(item?.launch_date_utc, "YYYY-MM-DD").format("DD-MM-YYYY")}</td>
                                        <td className='border-2'> {item?.launch_failure_details?.reason} </td>
                                        <td className='border-2'><a href={item?.links?.wikipedia} target="_blank" >{item?.links?.wikipedia}</a></td>
                                        <td className='border-2'>{item?.timeline?.webcast_liftoff}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
            <div className='flex flex-row justify-between mt-12'>
                <div className='flex  justify-start  gap-6 '>
                    {/* <button className={jumpPage === 0 ? 'bg-slate-400 h-8 w-16 border-2' : 'bg-red-400 h-8 w-16 border-2'} onClick={goToPage}
                        disabled={jumpPage === 0}
                    >Go to</button> */}
                    <Button 
                    className={ 'bg-blue-500 h-8 w-20 border-2'}
                    onClick={goToPage}
                    disabled={jumpPage === 0}
                    >Go to</Button>
                    <Input
                        className='w-14 h-8'
                        placeholder="Page No."
                        value={jumpPage}
                        onChange={(e: any) => {
                            setJumpPage(e.target.value)
                        }}
                    />
                </div>
                <div className='flex justify-end  gap-6 '>

                    <>
                        <Button
                            className={'bg-blue-500 h-8 w-20 border-2'}
                            onClick={prevPage}
                            disabled={currentPage === 1}
                        >Prev</Button>
                        {/* <button className={currentPage === 1 ? 'bg-slate-400 h-8 w-16 border-2' : 'bg-blue-300 h-8 w-16 border-2'} onClick={prevPage}
                            disabled={currentPage === 1}
                        >Prev</button> */}
                        Page No.  {currentPage}
                        <Button
                            className={'bg-green-500 hover:bg-green-500 h-8 w-20 border-2'}
                            onClick={nextPage}
                            disabled={currentPage > pageCount - 1}
                        >Next</Button>
                        {/* <button className={currentPage > pageCount - 1 ? 'bg-slate-400 h-8 w-16 border-2' : 'bg-green-300 h-8 w-16 border-2'} onClick={nextPage}
                            disabled={currentPage > pageCount - 1}
                        >Next</button> */}

                    </>


                </div>
            </div>
        </div>

    )
}
export default Deatils;




