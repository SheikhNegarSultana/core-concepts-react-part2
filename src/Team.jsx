import { useState } from "react"

export default function Team(){
    const[player, setPlayer] = useState(9)
    return (
        <div style={{
            border : '1px pink solid',
            padding : '6rem',
            margin : '4rem'
        }}>
         
         <p>Player : {player}</p>

        <button onClick={() => setPlayer(player+1)}> Add </button>

        <button onClick={() => setPlayer(player-1)}> Reduce </button>
        </div>
        
    )
}