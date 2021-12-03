import { ButtonGroup, Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
const Menubar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Link href='/'>
                    <a>
                    <Navbar.Brand>Navbar</Navbar.Brand>
                    </a>
                    </Link>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link >
                         <Link href="/newproperty">Add property</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link href='/login'>Login</Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Menubar
