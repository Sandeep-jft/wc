import { useRouter } from 'next/router';
import React from 'react'

export const getStaticProps = async (context)=>{
    const {params} = context;
    const resp = await fetch(`http://localhost:4000/comments/${params.id}`);
    const data = await resp.json();

    if(!data.id){
        return{
            notFound:true
        }
    }

    return {
        props:{
            post: data
        },
        revalidate:5
    }
}

export const getStaticPaths = ()=>{
    return {
        paths:[
            {
                params:{
                    id:"1"
                }
            }
        ],
        fallback:true
    }
}

const PostId = ({post={}}) => {
    const router = useRouter();

    if(router.isFallback){
        return <h3>Loading...</h3>
    }
    return (
    <div>comments Details:
        <h1>Id: {post.id}</h1>
        <h1>name: {post.username}</h1>
    </div>
  )
}

export default PostId