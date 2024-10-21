import './Boc.css'
import Friend from './Friend';
import { useEffect, useState } from "react";

export default function Friends(){
    const [friend , setFriend] = useState([])
    useEffect( () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json())
        .then(data => setFriend(data))
    } , [])
    return (
        <div className='box'> 
        <h2>Total Friends : {friend.length}</h2>
        {
            friend.map( item => {
                return <Friend info={item}></Friend>
            })
        }
        </div>
        );
}

/**
 * 1. state to hold data
 * 2. use effect with dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 * 5. display data on the component
*/