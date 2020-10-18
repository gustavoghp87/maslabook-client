import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

export const NavBar = () => {

    const elem = {padding:'5px', fontSize:'1.8rem', marginRight:'20px',
        textDecoration:'none', color:'white'
    }

    return (
    <>
        <Navbar className="fontsforweb_fontid_77695" style={{backgroundColor:'#3b5998'}}>

        <Link style={elem} to="/"><Navbar.Brand style={elem}>  maslabook  </Navbar.Brand></Link>
  
        <Nav className="mr-auto">
            <Link style={elem} to="/maslastory"> maslastory </Link>
            <Link style={elem} to="/maslaboard"> maslaboard </Link>
            <Link style={elem} to="/maslazoom"> maslazoom </Link>
        </Nav>

        </Navbar>
    </>
    )
}
