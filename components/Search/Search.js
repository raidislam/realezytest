import { Button, Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import  Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router'; 
const Search = ({result},searchValue,setSearchValue) => {
    // const [] = useState([]);
    // useEffect()
    console.log(result)
    const searchOnEvent =(e)=>{
        const text = e.target.value;
        setSearchValue(text)

    }
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        console.log(searchValue)
    }
    

    return (
        <Container>
            <Row className='mt-5'>
                <Col xs='12' md='8' className='mx-auto'>
                    <Card className=''>
                      <h2>Search Compound</h2>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Search
