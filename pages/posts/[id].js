import { useRouter } from 'next/router';
import React from 'react'

// export const getStaticPaths = async ( )=>{
//     const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const data = await resp.json();

//     const paths = data.map(item=>{
//         return {
//             params:{
//                 id:item.id.toString()
//             }
//         }
//     })

//     return {
//         paths,
//         fallback:true
//     }
// }

export const getStaticProps = async (context)=>{
    const {params} = context;
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
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
        fallback:true
    }
}

const PostId = ({post={}}) => {
    const routes = useRouter();

    if(routes.isFallback){
        return <h3>Loading ...</h3>
    }
     return (
    <div>Post Details:
        <h1>Id: {post.id}</h1>
        <h1>Title: {post.title}</h1>
        <h1>Description: {post.body}</h1>
    </div>
  )
}

export default PostId