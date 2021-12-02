import React from 'react'
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';


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
    const single_property = result.data
    console.log(single_property)
    return (
        <>
            <h2>Product name : {single_property.name}</h2>
            <h3>country Name : {single_property.country}</h3>
            <h3>Property Type : {single_property.listing_purpose}</h3>

            <Container>
                <Row className='mx-auto'>
                    <Col xs='12' md='8'>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src={single_property.images} />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                      </CardGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default singleProperty
