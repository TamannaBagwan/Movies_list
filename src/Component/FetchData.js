import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [user,setUser] = useState([]) ;
    useEffect(()=>{
      const fetchData=async()=>{
        const response = await axios('https://jsonplaceholder.typicode.com/users')
        setUser(response.data)
      }
      fetchData();
    })
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {user.map((user,i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
export default FetchData
