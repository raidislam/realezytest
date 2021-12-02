import React from 'react'
import Link from 'next/link'
export const getStaticProps = async ()=>{
    const user = await fetch('https://jsonplaceholder.typicode.com/users')
    const result = await user.json();

    return{
        props:{
            result
        }
    }
}


const blog = ({result}) => {
    return (
        <div>
            {
                result.map(res=>{
                    return(
                        <>
                           <div key={res.id}>
                                <h2>name:{res.name}</h2>
                                <Link href={`/blog/${res.id}`}>
                                <button>see details</button>
                                </Link>
                           </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default blog
