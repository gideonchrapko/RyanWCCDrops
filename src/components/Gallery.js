import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ReactGa from 'react-ga'


import Cards from './Cards'
// import MenuRight from './Menu'
// import Cart from './Cart'
import Header from './Header'
import Footer from './Footer'

// import Branding from '../images/wccMin.png';
// import NeonLogo from '../images/neon_gallery-min.png'

const Header_ImageConnect = {
    position: "fixed",
    marginTop: "100px",
    borderRadius: "25px",
    height: "65vh",
    width: "75vw", 
    marginLeft: "-37.5vw",
    marginTop: "-32.5vh",
    top: "50%",
    left: "50%",
    backgroundColor: "grey",
    opacity: "0.15",
    backgroundSize: "cover",
}

const Gallery = () => {

    useEffect(() => {
		ReactGa.initialize('UA-135117574-2')
		ReactGa.pageview('/gallery')
	})

    return (
        <Container fluid style ={{ position: "fixed"}}>
            <div style={Header_ImageConnect}>
            </div>
            <Header />
            <Cards />
            <Footer />
        </Container>
    )
}

export default Gallery