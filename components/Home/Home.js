import React, { useState } from 'react'

const Home = () => {
    const [name,setName] = useState('realEzy')
    const clickHandle = ()=>{
       name === 'realEzy'? setName('Property guru') : setName('realEzy'); 
    }
    return (
        <div>
            <h2>{name}</h2>
            <button onClick={clickHandle}>Click</button>
        </div>
    )
}

export default Home
