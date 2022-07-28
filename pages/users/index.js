import React from 'react'
import Link from 'next/link'
export const getStaticProps = async ()=>{
    const req = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await req.json();

    return {
        props:{
            data
        }
    }
}

const users = (props) => {
    const {data = []} = props;
  return (
    <div>
        <ul>
            users are: 
            {
                data.map(item=>{
                    return <div key={item.id}>
                    <Link href={`users/${item.id}`} passHref>
                    <h3>{item.id} - {item.username}</h3>
                    </Link>
                    <hr />
                </div>
                })
            }
        </ul>
        

    </div>
  )
}

export default users