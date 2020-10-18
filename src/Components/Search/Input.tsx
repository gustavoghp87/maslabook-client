import React from 'react'
import { Row, Col } from 'react-bootstrap'


export const Input = (props:any) => {

    const { setWords } = props

    return (
    <>
        <Row style={{marginBottom:'40px'}}>

            <Col lg={6}>
                <div className="form-group">
                    <input className="form-control" type="text"
                        style={{maxWidth:'300px', margin:'0 0 0 auto'}} placeholder="Palabras"
                        onChange={(e:any) => setWords(e.target.value)}
                    />
                </div>
            </Col>

            <Col lg={6}>

                <button className="btn btn-success fontsforweb_fontid_77695"
                    style={{
                        backgroundColor:'red', borderColor:'red', color:'white',
                        fontSize:'1.6rem', borderRadius:'8px', width:'400px'
                    }}
                    onClick={()=>props.enviar()}
                >
                    buscar
                </button>

            </Col>


        </Row>
    </>
    )
}
