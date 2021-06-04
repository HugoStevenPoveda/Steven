import React from "react"
import NavbarSecond from '../../components/navbarSecond'
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import './style.css'



const About = () => (
  <div>

    <NavbarSecond siteTitle="About"></NavbarSecond>
    <Container fluid="sm" >
      <Row className="justify-content-md-center">
        <Col>
          <StaticImage alt="imagen nueva" src="../../images/perfil.jpg" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Hola, mi nombre es Steven </h1>
          <p>Me encanta el desarrollo de software, es por eso estaré subiendo diferentes contenidos , desde un vista muy baja , algoritmos , una vista media , patrones de diseño y una vista más alta , arquitecturas.</p>
        </Col>
      </Row>
    </Container>


  </div>




)

export default About