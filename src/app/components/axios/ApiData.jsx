"use client"
import {useState,useEffect} from 'react'
import axios from 'axios'

const API ="https://jsonplaceholder.typicode.com/comments?"

function ApiData() {
    const [myData,setMyData]=useState([])
    const [isError,setIsError]=useState("")
    useEffect(()=>{
        const getData=async (url)=>{
            try {
                const res=await axios.get(url)
                setMyData(res.data)
            } catch (error) {
               setIsError(error.message)
            }
        }
        getData(`${API}/postId=1`)
    },[])
  return (
    <>
    <table>
        {isError != ""&& <h2>{isError}</h2>}
        {
        myData.slice(0,15).map(userInformation=>{
            return(
                <tr>
                    <td>{userInformation.postId}</td>
                    <td>{userInformation.id}</td>

                    <td>{userInformation.name}</td>

                    <td>{userInformation.email}</td>

                    <td>{userInformation.body.slice(0,10)}</td>
                </tr>
               

    
            )
        })
        
        }
    </table>
    </>
  )
}

export default ApiData