"use client"
import { useState, useEffect } from 'react'
import axios from 'axios'
function FetchData() {
    const [userData, setUserData] = useState([])
    const [error, setError] = useState("")
    useEffect(() => {
        const getUserData = async () => {
            try {
                const userInfo = await axios.get("https://jsonplaceholder.typicode.com/posts")
                setUserData(userInfo.data)

            } catch (error) {
                setError(error.message);
            }

        }
        getUserData();
    }, [])
    return (
        <>
            <h1>User Details</h1>
            {error != "" && <h2>{error}</h2>}
            <div className='flex items-center justify-center'>
                <table className='w-100 border border-red-300 text-center'>
                    {
                        userData.slice(0, 12).map(user => {
                            return (
                                <tr className='w-100 border border-red-300'>
                                    <td className='w-100 border border-red-300'>
                                        {user.id}
                                    </td>

                                    <td className='w-100 border border-red-300'>
                                        {user.title.slice(0, 12)}
                                    </td>

                                    <td className='w-100 border border-red-300'>
                                        {user.userId}
                                    </td>

                                    <td className='w-100 border border-red-300'>
                                        {user.body.slice(0, 15)}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </>
    )
}

export default FetchData