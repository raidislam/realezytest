import React from 'react'
import { Card, CardGroup, Col } from 'react-bootstrap'
import Image from 'next/image'
const SingleProperty = ({property}) => {
    const text = property.details.split()
    return (
        <Col xs='12' md='4'>
                <CardGroup>
                    <Card>
                        {/* <Image src={property.details.images[0]} width='100' height='100' /> */}
                        <Card.Body>
                        <Card.Title>Property :{property.name}</Card.Title>
                        <Card.Title>category :{property.category_name}</Card.Title>
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
    )
}

export default SingleProperty
