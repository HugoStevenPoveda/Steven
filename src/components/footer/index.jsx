import React from 'react'
import SocialMedia from '../socialMedia'
import { Container, Row,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'



const Footer = () => (
    <div>
        <footer classNameName="bg-light text-center text-lg-start">

            <Container>
                <Row>

                    <SocialMedia />
                </Row>
                <Row>
                    <div className="text-center p-3">
                        © 2021 Copyright :
                        <a className="text-dark" href="https://stevenpoveda.ml/"> Steven Poveda</a>
                    </div>

                </Row>
            </Container>

        </footer>
    </div>






)


export default Footer