import React, { useState } from 'react'
import Link from 'next/link'
import SingleProperty from '../SingleProperty/SingleProperty'
import { Button, Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
const AllProperty = ({property,filterData,setFilterData}) => {
    console.log(property)
    
    const searchOnEvent = (e)=>{
        const searchText = e.target.value;
        const matched = property.filter(pro => pro?.property_city?.toLowerCase().includes(searchText.toLowerCase()))
        setFilterData(matched)
    }

    return (
        <>
        <Container>
            <Row className=''>
                <Col xs='12' md='8' className='mx-auto p-4'>
                    <Card className='p-2'>
                        <InputGroup className="my-3">
                                <FormControl
                                onChange={searchOnEvent}
                                placeholder="Search by location or Postal code or City "
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                />
                               <Link href='/search?listing_purpose=rent'>
                               <Button type='submit' variant="outline-secondary" id="button-addon2">
                                    Rent 
                                </Button>
                               </Link>
                               <Link href='/search?listing_purpose=buy'>
                                <Button type='submit' variant="outline-secondary" id="button-addon2">
                                    Buy 
                                </Button>
                               </Link>
                        </InputGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
            {
                filterData?.map(property =><SingleProperty property={property} key={property.id}/>)
            }
        </>
    )
}

export default AllProperty
