import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AllProperty from '../components/Property/AllProperty/AllProperty'
import Search from '../components/Search/Search'

const search = ({properties}) => {
    console.log(properties)
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
                <Row>
                    <Col>
                        Properties {router.query.listing_purpose}
                    </Col>
                    <Col>
                        {
                            [].map(property=> <AllProperty property={property}/>)
                        }
                    </Col>
                    <Col>
                        {
                            [].length === 0 && (
                                <h2>No Result found</h2>
                            )
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default search


export const getServerSideProps = async ({query})=>{
    const listing_purpose = query.listing_purpose || 'rent'
    const bathroom = query.bathroom || 0 
    const bedroom = query.bedroom || 0
    const sqft = query.floor_size || 0

    const data = await fetch(`https://real-ezy.com/realezytech/api/index.php/product?listing_purpose=${listing_purpose}`)

    return{
        props:{
            properties:data.data
        }
    }
}