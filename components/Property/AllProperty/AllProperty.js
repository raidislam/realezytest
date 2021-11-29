import React, { useState } from 'react'
import SingleProperty from '../SingleProperty/SingleProperty'
import { Button, Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
const AllProperty = ({property}) => {
    const searchOnEvent =(e)=>{
        const text = e.target.value;
        setSearchValue(text)
    }
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        const matched = result.filter(cap => cap?.capital?.join().toLowerCase().includes(searchValue.toLowerCase()))
        setSearchValue(matched)
    }
    return (
        <>
        <Container>
            <Row className='my-5'>
                <Col xs='12' md='8' className='mx-auto bg-dark p-4'>
                    <Card className='p-2'>
                       <Form onSubmit={handleOnSubmit}>
                            <InputGroup className="mb-3">
                                <FormControl
                                onChange={searchOnEvent}
                                placeholder="Search by location or Postal code or City "
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                />
                                <Button type='submit' variant="outline-secondary" id="button-addon2">
                                    Search
                                </Button>
                            </InputGroup>
                       </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
            {
                property?.map(property =><SingleProperty property={property} key={property.id}/>)
            }
        </>
    )
}

export default AllProperty
