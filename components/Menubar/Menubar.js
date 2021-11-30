import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
const Menubar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Link href='/'>
                <Navbar.Brand>Navbar</Navbar.Brand>
            </Link>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default Menubar
