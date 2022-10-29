import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Heading, Skeleton } from '@chakra-ui/react'
import axios from 'axios'
import "../style/user.css"
import InfiniteScroll from 'react-infinite-scroll-component';


export const InfiniteScrolling = () => {
    const [userdata, setUserData] = useState([])
    const [loading, setloading] = useState(false)


    let limit = 10
    let totalResult=500
    console.log(userdata.length)

    const fetchData =  () => {
        setloading(true)
        let page = Math.ceil((userdata.length/limit)+1)
            console.log(userdata.length , limit)
            axios.get(`https://randomuser.me/api/?page=${page}&results=${limit}`)
            .then(res=>{
                let apires = (res?.data.results)
                let mergedata = [...userdata,...apires]
                setUserData(mergedata)
                setloading(false)
            })
        .catch ((err)=> {
            console.log(err)
            setloading(false)
        })
    }
    
    useEffect(() => {
        fetchData()
    },[])

    const fetchMoreData=()=>{
        if(userdata.length < totalResult){
            setTimeout(()=>{
                fetchData() 
            },1000)
        }
    }

    
    return (
        <InfiniteScroll
            dataLength={userdata.length}
            next={fetchMoreData}
            hasMore={userdata.length < totalResult}
            loader={<Skeleton startColor='pink.500' endColor='orange.500' height='20px' />}
            >
                <div >
            {userdata.map(e => {
                return (
                    <div key={e.cell} className="user-scroll-div">
                        <h1 className='user-name'>{e.name.first} {e.name.last}</h1>
                        <img className='user-image' src={e.picture.medium} alt="" />
                    </div>
                )
            })}
            
            </div>
        </InfiniteScroll>
    )
}

