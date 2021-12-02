import React from 'react'

export const getStaticPaths = async ()=>{
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
    const result = await users.json()

    const paths = result.map(res=>{
        return{
            params:{
                blogid:res.id.toString()
            }
        }
    })

    return{
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context)=>{
    const id = context.params.blogid;
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const result = await user.json()
    return{
        props:{
            result
        }
    }
}

const blogid = ({result}) => {
    return (
        <div>
            <h2>Email : {result.email}</h2>
        </div>
    )
}

export default blogid
