import React from 'react'
import { Card, CardGroup, Col } from 'react-bootstrap'
import Link from 'next/link'
const SingleProperty = ({property}) => {
    const property_details = JSON.parse(property.details);
    // const propertyImage = 'https://cdn.pixabay.com/photo/2014/08/03/23/41/house-409451_960_720.jpg';
    // const propertyImage = 'https://real-ezy.com/realezytech/api/uploads/699143-1637905411.png';
    const imageLink  = property_details.images;
    const propertyImage = imageLink.slice(1,imageLink.length-1)
    
    return (
        <Col xs='12' md='4'>
                <CardGroup>
                    <Link href={`/details/${property.id}`}>
                        <Card className='my-3'>
                            <Card.Img  src={propertyImage} width='100' height='200'  />
                            <Card.Body>
                            <Card.Title>Property :{property.name}</Card.Title>
                            <Card.Title>Location :{property.location_detail}</Card.Title>
                            <Card.Title>City :{property.property_city}</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted fs-5"> category :{property.category_name}</small>
                            </Card.Footer>
                        </Card>
                    </Link>
                </CardGroup>
            </Col>
    )
}

export default SingleProperty
