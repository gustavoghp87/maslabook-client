import React from 'react'


export const Footer = () => {

    return (
    <>
        <footer className="page-footer font-small teal pt-4" style={{paddingTop:'80px'}}>

            <div className="container-fluid text-center text-md-left"
                style={{backgroundColor:'#244794', paddingTop:'30px'}}
            >
                <div className="row">
                    
                    <div className="col-md-1 mt-md-0 mt-3"></div>
                    
                    <div className="col-md-5 mt-md-0 mt-3 fontsforweb_fontid_77695"
                        style={{marginBottom:'6px'}}>

                        <h5 className="text-uppercase font-weight-bold" style={{fontSize:'1.5rem'}}>
                            Se gobierna a sí misma
                        </h5>
                        
                        <p style={{fontSize:'1rem', textAlign:'justify'}}>
                            El buscador no intenta adivinar lo que estás buscando. Es un buscador exhaustivo que 
                            ordena resultados por fecha. No diferencia mayúsculas de minúsculas ni diferencia 
                            vocales con y sin tildes o diéresis. Centraliza la búsqueda en ambas redes sociales.
                            <br /> El captcha es para la seguridad de la aplicación. Era eso o implementar un sistema de login invasivo, contrario al anonimato de la red.
                        </p>
                    </div>
                    
                    <hr className="clearfix w-100 d-md-none pb-3" />
                    
                    <div className="col-md-5 mb-md-0 mb-3 fontsforweb_fontid_77695"
                        style={{marginBottom:'6px'}}
                    >

                        <h5 className="text-uppercase font-weight-bold" style={{fontSize:'1.5rem'}}>
                            Memerales
                        </h5>
                        
                        <p className="fontsforweb_fontid_77695" style={{fontSize:'1rem', textAlign:'justify'}}>
                            Todos los dibujos son de mi autoría, excepto el de /maslaboard. Se suben porque se suben.
                            Los comentarios irrespetuosos serán eliminados.
                            <br /> Esta app es 100% anti-publicidad y 100% pro-donaciones para su financiamiento. 
                            <br /> Comunicación a maslabook.app@gmail.com
                            <br /> Se agradecen sugerencias y avisos de errores.
                        </p>

                    </div>

                    <div className="col-md-1 mt-md-0 mt-3"></div>

                </div>
            </div>

            <div className="footer-copyright text-center py-3"
                style={{backgroundColor:'rgba(0, 0, 0, 0.87)', color:'blanchedalmond', paddingBottom:'10px'}}>

                <p style={{marginBottom:'5px'}}> © 2020 Copyright: &nbsp;
                    <a href="https://www.maslabook.com" style={{color:'#244794'}}>
                        maslabook.com
                    </a>
                </p>

                <div style={{fontSize:'16px', margin:'0 auto', width:'300px'}} className="blockchain-btn"
                    data-address="" data-shared="false"
                >
                    <div className="blockchain stage-begin">
                        <p style={{color:'#244794', marginBottom:'5px'}}>
                            Para hacer una donación en Bitcoins:
                            <span style={{color:'white'}}> 1ATseiqws37XuvFg57NNCDdCAnEQ5J9XyZ </span>
                        </p>
                    </div>

                </div>
            </div>

        </footer>
    </>
    )
}
