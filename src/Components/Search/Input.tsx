import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { mobile } from '../../App'


export const Input = (props:any) => {

    const { setWords } = props

    if (window.location.pathname==='/maslabook') {
        document.addEventListener('keydown', (event:any) => {
          if (event.keyCode === 13) document.getElementById('btnSearch')!.click()
        })
    }

    return (
    <>
        <Row style={{margin:'0 auto 40px auto', maxWidth:'95%'}}>

            <Col lg={6} style={{margin: mobile ? '0 auto 20px auto' : 'auto',
                padding: mobile ? '0' : '0 10px 0 0'}}>
                <div className="form-group" style={{maxWidth:'100%', margin:'auto'}}>
                    <input className="form-control" type="text" placeholder="Palabras"
                        style={{maxWidth:'300px', margin: mobile ? 'auto' : '0 0 0 auto'}}
                        onChange={(e:any) => setWords(e.target.value)}
                    />
                </div>
            </Col>

            <Col lg={6} style={{padding: mobile ? '0' : '0 0 0 10px'}}>

                <Button className="btn btn-success fontsforweb_fontid_77695" id="btnSearch"
                    style={{
                        backgroundColor:'red', borderColor:'red', color:'white', fontSize:'1.6rem',
                        width:'300px', borderRadius:'8px', display:'block',
                        margin: mobile ? 'auto' : '0 auto 0 0'
                    }}
                    onClick={()=>props.enviar()}
                >
                    buscar
                </Button>

            </Col>


        </Row>
    </>
    )
}
