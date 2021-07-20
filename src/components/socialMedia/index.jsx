import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { Facebook, Youtube, Linkedin, GitHub, Instagram } from 'react-feather'
const SocialMedia = () => (


    <Container>
        <Row>

            <Col>
                <Link to="https://www.facebook.com/DvlopMath" className="lined-link" activeClassName="active">   
                    <Facebook />
                </Link>
            </Col>

            <Col>
                <Link to="https://www.youtube.com/channel/UCb9qt5psssFl_HmQczPO-6Q" className="lined-link" activeClassName="active">
                    <Youtube />
                </Link>
            </Col>
            <Col>

                <Link to="https://www.instagram.com/dvlopmath/" className="lined-link" activeClassName="active">
                    <Instagram />
                </Link>
            </Col>
            <Col>
                <Link to="https://www.linkedin.com/in/steven-poveda-girata-14b356214/" className="lined-link" activeClassName="active">
                    <Linkedin />
                </Link>
            </Col>

            <Col>

                <Link to="https://github.com/HugoStevenPoveda" className="lined-link" activeClassName="active">
                    <GitHub />
                </Link>

            </Col>

        </Row>
    </Container>








)

export default SocialMedia




