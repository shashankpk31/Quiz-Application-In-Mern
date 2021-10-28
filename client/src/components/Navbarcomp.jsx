import React, { Component } from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'

class Navbarcomp extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Quiz Application</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/Quiz">Quiz</Nav.Link>
                        <Nav.Link href="/Instructions">Instructions</Nav.Link>
                        <Nav.Link href="/Score">Score</Nav.Link>
                        <Nav.Link href="/Review">Review</Nav.Link>
                        <Nav.Link href="/addQues">AddQuestion</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default Navbarcomp
