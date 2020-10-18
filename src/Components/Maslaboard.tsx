import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Axios from 'axios'
import { SERVER } from '../Config'
import { timer } from '../Timer'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { mobile } from '../App'


export const Maslaboard = () => {

  const [boards, setBoards] = useState({boards:[]})
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const { executeRecaptcha } = useGoogleReCaptcha()

  useEffect(() => {
    const traer = async () => {
      const axios = await Axios(`${SERVER}/api/maslaboard`)
      const data = await axios.data
      setBoards({boards:data})
    }
    traer()
  }, [])

  const sendMessage = async () => {
    handleClose()
    const fetchy = await fetch('https://ipapi.co/json')
    const json = await fetchy.json()
    const json1 = json.ip
    const json2 = json.city
    const json3 = json.country
    const json4 = json.latitude
    const json5 = json.longitude
    if (!executeRecaptcha) return
    const result = await executeRecaptcha("")
    const body = { name, message, json1, json2, json3, json4, json5, result }
    const axios = await Axios.post(`${SERVER}/api/maslaboard`, body)
    const data = await axios.data
    setBoards({boards:data})
  }

  return (
  <>
      <div className="container maslaboard" style={{maxWidth: mobile ? '100%' : '80%'}}>

        <div className="col-sm-12">

          <div className="cualquiera" style={{paddingBottom: mobile ? '30px' : '100px'}}>
              <Button type="button" className="btn btn-lg fontsforweb_fontid_77695"
                  style={{backgroundColor:'red', color:'white', display:'block', margin:'auto',
                      fontSize: mobile ? '1.6rem' : '1.8rem', borderRadius:'8px'}}
                  onClick={()=>handleShow()}
              >
                  escribir un mensaje
              </Button>
          </div>
        </div>

        <hr style={{
          marginBottom:'55px', width: '100%', border: '1px solid #3b5998', borderRadius: '5px'
        }} />


        {boards && boards.boards && !!boards.boards &&
          boards.boards.map((board:any) => (

        <div key={board.timeBoard} className="container" style={{paddingBottom: '50px'}}>
          <div className="row">
            <div className="col-sm-12" style={{display:'block', margin:'auto', padding:'0'}}>

              <div className="card-header">

                <div className="row" style={{paddingTop: '12px', paddingBottom: '0px'}}>
                  <div className="col-md-6">
                    <h4 className="fontsforweb_fontid_77695"
                        style={{fontSize: '1.4rem', color: '#3b5998', textIndent: '4%'}}>

                      {board.nombreBoard}

                    </h4>
                  </div>
                  
                  <div className="col-md-6">
                    <span style={{fontSize:'1rem', color:'gray', float:'right',
                      marginBottom: mobile ? '12px' : '0'}}>

                      |&nbsp; {timer(board.timeBoard)}

                    </span>
                  </div>
                </div>
                
                <p className="far fontsforweb_fontid_77695 board"
                  style={{fontSize: '1.1rem', fontStyle: 'normal', textAlign: 'justify',
                    paddingBottom:'8px', textIndent:'2%'}}>
                  {board.postBoard}
              </p>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>


      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
              <Modal.Title className="fontsforweb_fontid_77695" style={{fontSize: '1.5rem'}}>
                  Escribe un mensaje
              </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            
            <img className="img-fluid" src="/images/maslazoom.jpg" alt="maslazoom" />
          
            <div className="modalFormWrapper">
              <div className="form-group fontsforweb_fontid_77695" style={{marginBottom: '2px'}}>
                <label style={{fontSize: '1rem'}}>Nombre</label>
                <input type="text" className="form-control" placeholder="Un nombre [max 25]"
                  onChange={(e:any)=>setName(e.target.value)} />
              </div>

              <div className="form-group fontsforweb_fontid_77695" style={{marginTop: '8px'}}>
                <label style={{fontSize: '1rem'}}>Mensaje forista</label>
                <textarea className="form-control" placeholder="Posteo [max 1400]" defaultValue={""}
                  onChange={(e:any)=>setMessage(e.target.value)} />
              </div>

            </div>

          </Modal.Body>


          <Modal.Footer>

              <Button variant="secondary" className="fontsforweb_fontid_77695" onClick={handleClose}
                  style={{paddingBottom:'8px', fontSize:'1.1rem'}}>
                  Salir sin publicar
              </Button>

              <Button variant="primary" className="fontsforweb_fontid_77695" onClick={()=>sendMessage()}
                  style={{backgroundColor:'red', borderColor:'red', fontSize:'1.1rem'}}>
                  PUBLICAR
              </Button>

          </Modal.Footer>
      </Modal>
  </>
  )
}
