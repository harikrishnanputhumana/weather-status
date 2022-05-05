import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import './Contactus.css'
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'
function Contactus() {
    const navigate = useNavigate()
    const submit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_2is9e3m',
            'template_7dju6vp',
            e.target,
            'o_rCVXT5vjDS3ogzN')
            .then((res) => {
                navigate('/')
            }).catch((err) => {
                console.log(err);
                alert("Error")
            })

    }
    return (
        <div className='contact'>
            <form  onSubmit={submit}>
                <Container>
                    <Row>
                        <Col md={3}>
                            <h2>Contact Us</h2>
                        </Col>
                        <Col md={3}>
                            <label htmlFor="">Email</label> <br />
                            <input name='Email' type="email" />
                        </Col>
                        <Col md={3}>
                            <label htmlFor="">Suggestions</label> <br />
                            <textarea name="Suggestions" cols="40" rows="5"></textarea>
                        </Col>
                        <Col md={3}>
                            <button type='submit' id="button">Submit</button>
                        </Col>
                    </Row>
                </Container>
            </form>

        </div>
    )
}

export default Contactus