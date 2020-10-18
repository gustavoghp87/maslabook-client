import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {

    return (
    <>
        <div className="fontsforweb_fontid_77695" style={{paddingTop:'15px'}}>

            <Link to="/maslabook">
                <img src="/images/mb-logo.png" alt="logo"
                    style={{display:'block', margin:'auto', maxHeight:'80px', marginTop:'30px'}}
                />
            </Link>

            <p style={{
                textAlign:'center',
                fontSize:'1.3rem',
                paddingTop:'10px',
                paddingBottom:'50px'
            }}>
                Esta app es Indestructible * Invencible * Inmortal
            </p>
      </div>
    </>
    )
}
