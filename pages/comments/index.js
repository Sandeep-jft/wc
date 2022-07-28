import React from 'react'
import Link from 'next/link'
export const getStaticProps = async ()=>{
    const req = await fetch('http://localhost:4000/comments');
    const data = await req.json();

    return {
        props:{
            data
        },
        revalidate:5
    }
}

const users = (props) => {
    const {data = []} = props;
  return (
    <div>
        <ul>
            comments are: 
            {
                data.map(item=>{
                    return <div key={item.id}>
                    <Link href={`comments/${item.id}`} passHref>
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