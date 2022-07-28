import React from 'react'

export const getServerSideProps = async (props)=>{

    const resp = await fetch('http://localhost:4000/products');
    const data = await resp.json();

    return {
        props:{
            products: data
        }
    }
}

const Index = ({products = []}) => {
  return (
    <h1>
        Products page: 
        {
            products.map(item=>{
                return <div key={item.id} >
                    <h3>
                        {item.id} {item.title}
                    </h3>
                </div>
            })
        }
    </h1>
  )
}

export default Index