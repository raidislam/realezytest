import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../components/Banner/Banner'
import AllProperty from '../components/Property/AllProperty/AllProperty';


export const getStaticProps = async ()=>{
  const property = await fetch('https://real-ezy.com/realezytech/api/index.php/product');
  const result = await property.json();
  return {
    props:{
      result
    }
  }
}

export default function Home({result}) {
  const propertyData = result.data;
  const [searchValue,setSearchValue] = useState()
  const [property,setAllProperty] = useState(propertyData);
  console.log(property)
  return (
    <>
      <Banner/>
      <Container>
        <Row className='my-5'>
          <AllProperty property={property} />
        </Row>
      </Container>
    </>
  )
}
