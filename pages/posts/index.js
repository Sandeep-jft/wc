import Link from 'next/link';
import React from 'react'

export const getStaticProps = async ()=>{
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await resp.json();

    return {
        props:{
            posts: data.slice(0,4)
        }
    }
}

const Posts = ({posts=[]}) => {
  return (
    <div>Posts:
           {
            posts.map(item=>{
                return <div key={item.id}>
                    <Link href={`posts/${item.id}`} passHref>
                    <h3>{item.id} - {item.title}</h3>
                    </Link>
                    <hr />
                </div>
            })
           }
    </div>
  )
}

export default Posts