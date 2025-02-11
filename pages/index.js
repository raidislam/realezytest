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
  const [filterData,setFilterData] = useState(propertyData)
  const [property,setAllProperty] = useState(propertyData);
  console.log(property)
  return (
    <>
      <Banner/>
      <Container>
        <Row className='my-2'>
          <AllProperty property={property} filterData={filterData} setFilterData={setFilterData} />
        </Row>
      </Container>
    </>
  )
}
