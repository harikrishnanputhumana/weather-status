import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import './Contactus.css'
function Contactus() {
  return (
    <div>
        <Container>
            <Row>
                <Col md={3}>
                <h2>Contact Us</h2>
                </Col>
                <Col md={3}>
                <label htmlFor="">Email</label> <br />
                <input type="text" />
                </Col>
                <Col md={3}>
                <label htmlFor="">Suggestions</label> <br />
                <input type="text" />
                </Col>
                <Col md={3}>    
                 <button>Submit</button>
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default Contactus