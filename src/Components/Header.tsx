import React from 'react'
import { Link } from 'react-router-dom'
import { mobile } from '../App'


export const Header = () => {

    return (
    <>
        <div className="fontsforweb_fontid_77695" style={{paddingTop: mobile ? '15px' : '25px'}}>

            <Link to="/maslabook">
                <img src="/images/mb-logo.png" alt="logo"
                    style={{display:'block', margin:'auto', maxHeight:'80px', marginTop:'30px'}}
                />
            </Link>

            <p style={{
                textAlign: 'center',
                fontSize: mobile ? '1.1rem' : '1.3rem',
                paddingTop: mobile ? '5px' : '10px',
                paddingBottom: mobile ? '40px' : '50px'
            }}>
                Esta app es Indestructible * Invencible * Inmortal
            </p>
      </div>
    </>
    )
}
