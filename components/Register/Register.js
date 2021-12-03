import React from 'react'
import Link from 'next/link'
import { useForm } from "react-hook-form";
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container>
                 <Row className='justify-content-md-center my-5'>
                    <Col xs='12' md='6' className='text-center'>
                        <h2>Hello!</h2>
                        <h3>Create Account</h3>
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col xs='12' md='6'>
                        <Card className='py-3'>
                            <Card.Body>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input placeholder='Name' className='w-100 p-3' {...register("Name", { required: true, maxLength: 20 })} />
                                    <input placeholder='email' className='w-100 p-3 my-2' type="email" {...register("age", { min: 18, max: 99 })} />
                                    <input placeholder='password' className='w-100 p-3 my-2' type="password" {...register("age", { min: 18, max: 99 })} />
                                    <input className='w-100 p-3' type="submit"  value='Signup'/>
                                </form>
                            </Card.Body>
                            <Link href='/login'>
                                <Button>All ready usesr? please Login</Button>
                            </Link>
                        </Card>
                    </Col>
                </Row>
        </Container>
    )
}

export default Register
