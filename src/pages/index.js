import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import GlobalStyle from '../components/global'
import Carrusel from '../components/carrusel'
import MediaCard from '../components/card'
import { StaticImage } from 'gatsby-plugin-image'

import Image from "../images/image"
const Home = () => (



    <div>


        <GlobalStyle />
        <Navbar siteTitle="Steven Poveda"></Navbar>
        <Container>

            <Row>
                <div>
                    <p>
                        Este espacio es creado con el objetivo de ayudar a todos aquellos que deseen iniciar en el mundo del desarrollo de software, discutiremos desde conceptos básicos, hasta temas un poco más avanzados, todo esto con el fin de permitir a todos aquellos que, como yo, hemos tenido dificultades para ingresar en este maravilloso mundo del software, espero este material les sea útil.
                    </p>

                </div>

                <div>
                    <StaticImage alt="descarga" src='../images/dvlopMath31.jpg' />

                </div>

            </Row>





            <Row>
                <Carrusel />
            </Row>
            <Row>



                <MediaCard image={Image.saludo} title={"Hola mundo"} paragraph={"esto es un aprueba"} />

                <MediaCard image={Image.saludo} title={"Hola mundo"} paragraph={"esto es un aprueba"} />

                <MediaCard image={Image.saludo} title={"Hola mundo"} paragraph={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam tempora quasi libero architecto aliquid, id debitis harum molestias laborum officiis corrupti, voluptatem, quidem natus qui. Quaerat harum cum explicabo eos."} />
                <MediaCard image={Image.saludo} title={"Hola mundo"} paragraph={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam tempora quasi libero architecto aliquid, id debitis harum molestias laborum officiis corrupti, voluptatem, quidem natus qui. Quaerat harum cum explicabo eos."} />
                <MediaCard image={Image.saludo} title={"Hola mundo"} paragraph={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam tempora quasi libero architecto aliquid, id debitis harum molestias laborum officiis corrupti, voluptatem, quidem natus qui. Quaerat harum cum explicabo eos."} />
                <MediaCard image={Image.saludo} title={"Hola mundo"} paragraph={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam tempora quasi libero architecto aliquid, id debitis harum molestias laborum officiis corrupti, voluptatem, quidem natus qui. Quaerat harum cum explicabo eos."} />








            </Row>

        </Container>
        <Footer />
    </div>
)

export default Home
