import React from 'react'
import { Carousel } from 'react-bootstrap'
import Image from 'next/image'
import bannerImage from '../../public/images//banner.jpg'
const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <Image
                className="d-block w-100"
                src={bannerImage}
                alt="First slide"
                layout='fixed'
                height='600px'
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                className="d-block w-100"
                src={bannerImage}
                alt="First slide"
                layout='fixed'
                height='600px'
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                className="d-block w-100"
                src={bannerImage}
                alt="First slide"
                layout='fixed'
                height='600px'
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner
