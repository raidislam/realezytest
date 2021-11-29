
import { Button, Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap'

const Search = ({result},searchValue,setSearchValue) => {
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
    )
}

export default Search
