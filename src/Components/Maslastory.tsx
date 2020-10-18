import React, { useEffect } from 'react'
import Axios from 'axios'
import { SERVER } from '../Config'


export const Maslastory = () => {

  useEffect(() => {
    Axios(`${SERVER}/api/maslastory`)
  }, [])

  return (
  <>
      <div className="container maslastory" style={{maxWidth: '80%'}}>
      <div className="col-sm-12" style={{marginBottom: '40px'}}>
        <div className="row">
          <h1 className="fontsforweb_fontid_77695 historia" style={{textAlign: 'center', paddingBottom: '30px', fontSize: '3rem'}}>
            Maslatón fue protagonista de algunos de los eventos más importantes de la historia humana
          </h1>
        </div>
      </div>
      <hr style={{marginBottom: '50px', width: '100%', border: '1px solid #3b5998', borderRadius: '1px'}} />
      <div className="row">
        <div className="col" style={{paddingLeft: '6%', paddingRight: '6%'}}>
          <h6 className="fontsforweb_fontid_77695 story" style={{textAlign: 'center', marginBottom: '30px'}}>
            Partió de Ur (Caldea) junto a Abraham y Sara hacia la tierra de Canaán (siglo XX a.E.C.)
          </h6>
        </div>
      </div>
      <div className="row" style={{marginBottom: '60px'}}>
        <div className="col-md-1" />
        <div className="col-md-10">
          <img src="/images/ur.jpg" alt="maslaimagen"
            style={{display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: '900px'}} />
        </div>
        <div className="col-md-1" />
      </div>
      {/* POST */}
      <hr style={{marginBottom: '50px', width: '100%', border: '1px solid #3b5998', borderRadius: '1px'}} />
      <div className="row">
        <div className="col" style={{paddingLeft: '6%', paddingRight: '6%'}}>
          <h6 className="fontsforweb_fontid_77695 story" style={{textAlign: 'center', marginBottom: '30px'}}>
            Sirvió como sacerdote en el desierto a las órdenes de Aarón, y después en Siló, Gabaón y Jerusalén (siglos XV-VII a.E.C.)
          </h6>
        </div>
      </div>
      <div className="row" style={{marginBottom: '60px'}}>
        <div className="col-md-1" />
        <div className="col-md-10">
          <img src="/images/aaron.jpg" alt="maslaimagen"
            style={{display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: '900px'}} />
        </div>
        <div className="col-md-1" />
      </div>
      {/* POST */}
      <hr style={{marginBottom: '50px', width: '100%', border: '1px solid #3b5998', borderRadius: '1px'}} />
      <div className="row">
        <div className="col" style={{paddingLeft: '6%', paddingRight: '6%'}}>
          <h6 className="fontsforweb_fontid_77695 story" style={{textAlign: 'center', marginBottom: '30px'}}>
            Inventó el capitalismo durante la Baja Edad Media en ciudades mugrientas al margen del poder feudal (siglos XI a XV E.C.)
          </h6>
        </div>
      </div>
      <div className="row" style={{marginBottom: '60px'}}>
        <div className="col-md-1" />
        <div className="col-md-10">
          <img src="/images/capitalism.jpg" alt="maslaimagen"
            style={{display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: '800px'}} />
        </div>
        <div className="col-md-1" />
      </div>
      {/* POST */}
      <hr style={{marginBottom: '50px', width: '100%', border: '1px solid #3b5998', borderRadius: '1px'}} />
      <div className="row">
        <div className="col" style={{paddingLeft: '6%', paddingRight: '6%'}}>
          <h6 className="fontsforweb_fontid_77695 story" style={{textAlign: 'center', marginBottom: '30px'}}>
            Conservó la tradición judía durante la Diáspora como máxima autoridad mundial sobre judaísmo (siglos II a XVIII E.C.)
          </h6>
        </div>
      </div>
      <div className="row" style={{marginBottom: '60px'}}>
        <div className="col-md-1" />
        <div className="col-md-10">
          <img src="/images/jud.jpg" alt="maslaimagen"
            style={{display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: '800px'}} />
        </div>
        <div className="col-md-1" />
      </div>
      {/* POST */}
      <hr style={{marginBottom: '50px', width: '100%', border: '1px solid #3b5998', borderRadius: '1px'}} />
      <div className="row">
        <div className="col" style={{paddingLeft: '6%', paddingRight: '6%'}}>
          <h6 className="fontsforweb_fontid_77695 story" style={{textAlign: 'center', marginBottom: '30px'}}>
            Fue líder político y combatió en las guerras de la independencia de Sudamérica (siglo XIX E.C.)
          </h6>
          <br />
        </div>
      </div>
      <div className="row" style={{marginBottom: '60px'}}>
        <div className="col-md-1" />
        <div className="col-md-10">
          <img src="/images/procer.jpg" alt="maslaimagen"
            style={{display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: '500px'}} />
        </div>
        <div className="col-md-1" />
      </div>
      {/* POST */}
      <hr style={{marginBottom: '50px', width: '100%', border: '1px solid #3b5998', borderRadius: '1px'}} />
      <div className="row">
        <div className="col" style={{paddingLeft: '6%', paddingRight: '6%'}}>
          <h6 className="fontsforweb_fontid_77695 story" style={{textAlign: 'center', marginBottom: '30px'}}>
            Sobrevivió a la pandemia de gripe española pero no por el barbijo sino por ser invencible (1918 E.C.)
          </h6>
        </div>
      </div>
      <div className="row" style={{marginBottom: '60px'}}>
        <div className="col-md-1" />
        <div className="col-md-10">
          <img src="/images/flu.jpg" alt="maslaimagen"
            style={{display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: '500px'}} />
        </div>
        <div className="col-md-1" />
      </div>
      {/* POST */}
      <hr style={{marginBottom: '50px', width: '100%', border: '1px solid #3b5998', borderRadius: '1px'}} />
      <div className="row">
        <div className="col" style={{paddingLeft: '6%', paddingRight: '6%'}}>
          <h6 className="fontsforweb_fontid_77695 story" style={{textAlign: 'center', marginBottom: '30px'}}>
            Combatió en el BIM 5 defendiendo el monte Tumbledown (1982 E.C.)
          </h6>
        </div>
      </div>
      <div className="row" style={{marginBottom: '60px'}}>
        <div className="col-md-1" />
        <div className="col-md-10">
          <img src="/images/bim.jpg" alt="maslaimagen"
            style={{display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: '700px'}} />
        </div>
        <div className="col-md-1" />
      </div>
      {/* POST */}
      <hr style={{marginBottom: '50px', width: '100%', border: '1px solid #3b5998', borderRadius: '1px'}} />
      <div className="row">
        <div className="col" style={{paddingLeft: '6%', paddingRight: '6%'}}>
          <h6 className="fontsforweb_fontid_77695 story" style={{textAlign: 'center', marginBottom: '30px'}}>
            Metió las manos en el cajón de Hugo Chávez para demostrar que había un muñeco barato (2013 E.C.)
          </h6>
        </div>
      </div>
      <div className="row" style={{marginBottom: '60px'}}>
        <div className="col-md-1" />
        <div className="col-md-10">
          <img src="/images/cha.jpg" alt="maslaimagen"
            style={{display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: '500px'}} />
        </div>
        <div className="col-md-1" />
      </div>
      {/* POST */}
      <hr style={{marginBottom: '50px', width: '100%', border: '1px solid #3b5998', borderRadius: '1px'}} />
      <div className="row">
        <div className="col" style={{paddingLeft: '6%', paddingRight: '6%'}}>
          <h6 className="fontsforweb_fontid_77695 story" style={{textAlign: 'center', marginBottom: '30px'}}>
            Inventó a Donald Trump y Jair Bolsonaro para una restauración de derecha nacional en occidente (2016-2019 E.C.)
          </h6>
        </div>
      </div>
      <div className="row" style={{marginBottom: '60px'}}>
        <div className="col-md-1" />
        <div className="col-md-10">
          <img src="/images/politics.jpg" alt="maslaimagen"
            style={{display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: '500px'}} />
        </div>
        <div className="col-md-1" />
      </div>
      {/* POST */}
      <hr style={{marginBottom: '50px', width: '100%', border: '1px solid #3b5998', borderRadius: '1px'}} />
      <div className="row">
        <div className="col" style={{paddingLeft: '6%', paddingRight: '6%'}}>
          <h6 className="fontsforweb_fontid_77695 story" style={{textAlign: 'center', marginBottom: '30px'}}>
            Le paró la mano al ecologismo marxista internacional (2019 E.C.)
          </h6>
        </div>
      </div>
      <div className="row" style={{marginBottom: '60px'}}>
        <div className="col-md-1" />
        <div className="col-md-10">
          <img src="/images/eco.jpg" alt="maslaimagen"
            style={{display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: '500px'}} />
        </div>
        <div className="col-md-1" />
      </div>
      {/* POST */}
      <hr style={{marginBottom: '50px', width: '100%', border: '1px solid #3b5998', borderRadius: '1px'}} />
      <div className="row">
        <div className="col" style={{paddingLeft: '6%', paddingRight: '6%'}}>
          <h6 className="fontsforweb_fontid_77695 story" style={{textAlign: 'center', marginBottom: '30px'}}>
            Le dijo lo que piensa al progresismo latinoamericano (2019 E.C.)
          </h6>
        </div>
      </div>
      <div className="row" style={{marginBottom: '60px'}}>
        <div className="col-md-1" />
        <div className="col-md-10">
          <img src="/images/puebla.jpg" alt="maslaimagen"
            style={{display: 'block', margin: 'auto', width: '100%', maxHeight: '1000px'}} />
        </div>
        <div className="col-md-1" />
      </div>
      {/* CIERRRE */}
      <hr style={{marginBottom: '200px', width: '100%', border: '1px solid #3b5998', borderRadius: '1px'}} />
    </div>
  </>
  )
}
