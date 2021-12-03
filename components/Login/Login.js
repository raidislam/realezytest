import React from 'react'
import Link from 'next/link'
import { FaGoogle ,FaFacebook} from "react-icons/fa";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
const Login = () => {
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
                                    <input placeholder='password' className='w-100 p-3 my-2' type="password" {...register("age", { min: 18, max: 99 })} />
                                    <input placeholder='email' className='w-100 p-3 my-2' type="email" {...register("age", { min: 18, max: 99 })} />
                                    <input className='w-100 p-3' type="submit"  value='Login'/>
                                </form>
                            </Card.Body>
                            <div className='my-3 text-center'>
                                <a className='fs-2'><FaGoogle/></a>
                                <a className='ms-3 fs-2'><FaFacebook/></a>
                            </div>
                            <div className='text-center'>
                                <Link href='/register'>
                                    <a className='fw-bold'>New usesr? please Create Account</a>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                </Row>
        </Container>
    )
}

export default Login
