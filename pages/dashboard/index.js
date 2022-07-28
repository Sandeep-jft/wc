import React from 'react'
import useSWR from 'swr'

const fetcher = async ()=>{
    const resp = await fetch('http://localhost:4000/dashboard');
    const data = await resp.json();

    return data;
}

const Dashboard = () => {
    const {data, error} = useSWR('dashboard', fetcher);
    if(error){
        return <h1>Error </h1>
    }
    else if( !data ){
        return <h1>Loading...</h1>
    }
    return (
    <div>
        <h1>Dashboard</h1>
        <h3>Likes: {data.likes} </h3>
        <h3>Posts: {data.posts} </h3>
        <h3>Followers: {data.followers} </h3>
        <h3>Following: {data.following} </h3>
    </div>
  )
}

export default Dashboard