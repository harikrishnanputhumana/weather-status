import React, { useState } from 'react'
import axios from 'axios'
import { API_KEY } from '../constants/constants';
import { baseUrl } from '../constants/constants';
import './Nav.css';
import { Container, Row, Col } from 'react-grid-system';
function Nav() {
    const [temp, setTemp] = useState()
    function test() {
        axios.get(`${baseUrl}=${API_KEY}&query=delhi`).then((response) => {
            console.log(response);
            setTemp(response.data.current.temperature)
        })
    }
    return (
        <div className='home'>
            <Container>
                <Row>
                    <Col sm={6} lg={4}>
                        <div className="nav1">
                            
                            <h2>Weather Live</h2>
                            
                        </div>
                    </Col>
                    <Col sm={6} lg={4}>
                        <div className="nav2">
                            <input type="text"  id='input' />
                            <h4>Location</h4>
                            <button onClick={test}>Find</button>
                            <h4>{temp}</h4>
                            
                        </div>
                    </Col>
                    

                </Row>
            </Container>
        </div>
    )
}

export default Nav