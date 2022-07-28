import React from 'react'

export const getStaticProps = async (context)=>{
    const {params} = context;
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await resp.json();

    console.log('the route id is -->', params.id);

    if(!data.id){
        return{
            notFound:true
        }
    }

    return {
        props:{
            post: data
        }
    }
}

export const getStaticPaths = ()=>{
    return {
        paths:[
            {
                params:{
                    id:"1"
                }
            },
            {
                params:{
                    id:"2"
                }
            },
            {
                params:{
                    id:"3"
                }
                
            }
        ],
        fallback:'blocking'
    }
}

const PostId = ({post={}}) => {
     return (
    <div>user Details:
        <h1>Id: {post.id}</h1>
        <h1>name: {post.username}</h1>
    </div>
  )
}

export default PostId