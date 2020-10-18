import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { mobile } from '../App'


export const NavBar = () => {

    const elem1 = {
        fontSize: '2rem',
        padding: mobile ? '5px' : '5px 40px',
        textDecoration:'none',
        color: 'white',
        borderRight: '1px solid white'
    }

    const elem2 = {
        fontSize: '1.8rem',
        padding: mobile ? '5px' : '0 40px',
        textDecoration: 'none',
        color: 'white',
        borderRight: '1px solid white'
    }

    return (
    <>
        <Navbar className="fontsforweb_fontid_77695" style={{backgroundColor:'#3b5998'}}>

        <Link to="/">
            <Navbar.Brand style={elem1}>
                maslabook
            </Navbar.Brand>
        </Link>
  
        <Nav className="mr-auto">
            <Link style={elem2} to="/maslastory"> maslastory </Link>
            <Link style={elem2} to="/maslaboard"> maslaboard </Link>
            <Link style={elem2} to="/maslazoom"> maslazoom </Link>
        </Nav>

        </Navbar>
    </>
    )
}
