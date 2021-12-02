import React from 'react'


export const getStaticPaths = async ()=>{
    const property = await fetch('https://real-ezy.com/realezytech/api/index.php/product');
    const result = await property.json();
    const data = result.data;
   const paths = data.map(res=> {
       return {
           params:{
               propertyid:res.id
           }
       }
   })

    return {
        paths,
        fallback:false
    }
}



export const getStaticProps = async (context)=>{
    const id = context.params.propertyid;
    const singlePro = await fetch(`https://real-ezy.com/realezytech/api/index.php/product/detail/${id}`,{
        headers:{
            'content-type':'application/json',
            'Client-Service':'frontend-client',
            'Auth-Key':'simplerestapi',
            'User-ID':'863',
            'Token':'$6$rounds=5042$61a89603099510.3$PL.urIXm4uPtVYUVZn2DMPauDIn68vIMQUgctcE4hktnPDid3FPfQjb5voU2X.ghFAoB6BCkR48ZUA8zxCF.9/'
        }
    })
    const result = await singlePro.json();

    return {
        props:{
            result
        }
    }
}




const singleProperty = ({result}) => {
    console.log(result.data)
    return (
        <div>
            <h2>{result.data.name}</h2>
        </div>
    )
}

export default singleProperty
