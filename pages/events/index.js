import { useRouter } from 'next/router';
import {useState} from 'react'

export const getServerSideProps = async (context)=>{
    const {query} = context;
    const {category} = query;

    const queryParams = category? 'category=sports':'';
    const req = await fetch(`http://localhost:4000/events?${queryParams}`);
    const data = await req.json();

    return {
        props:{
           events: data
        }
    }
}

const Events = ({events=[]}) => {
    const [eventState, setEventState]  =useState(events);
    const routes = useRouter();
    
    const handleSportsCategory = async ()=>{
        const req = await fetch('http://localhost:4000/events?category=sports');
        const data = await req.json();
        setEventState(data);
        routes.push('events?category=sports', undefined,{shallow:true})
    }
  return (
    <div>
        <h1>Events landing Page</h1>
        <button onClick={handleSportsCategory} >
            Sports Category
        </button>
        <br />
        {
            eventState.map(item=>{
                return <div key={item.id} >
                    <h3>{item.id} {item.title} | {item.category}</h3>
                    <hr /><br />
                </div>
            })
        }
    </div>
  )
}

export default Events