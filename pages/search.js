import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Search from '../components/Search/Search'

const search = () => {
    const router = useRouter()
    return (
        <>
            <Container>
                <Row className='mx-auto'>
                    <Col>
                        <h2>advanced search by filter</h2>
                    </Col>
                    <Col>
                        <Search/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default search
