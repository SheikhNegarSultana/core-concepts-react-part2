import { useState } from "react";

export default function Count(){
    const [count, setCount] = useState(0)

    return(
        <div style={ {border : ' solid 1px '} }>
            <p>Count: {count}</p>
            <button onClick={ () => setCount(count + 1)}>Add</button>
            <button onClick={ () => setCount(count -1)}>Reduce</button>
        </div>
    )
    
}