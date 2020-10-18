import React, { useState } from 'react'


export const Recomend = () => {

    const [showRecomends, setShowRecomends] = useState(false)

    return (
    <>
        <button className="btn btn-primary fontsforweb_fontid_77695" type="button"
            style={{display:'block', margin:'auto', fontSize:'1rem', borderColor:'black',
            backgroundColor:'#3b5998', width:'200px', marginTop:'70px'}}
            onClick={()=>setShowRecomends(!showRecomends)}
        >
            recomendados
        </button>

        <div style={{display: showRecomends ? 'block' : 'none', maxWidth:'80%', margin:'auto'}}>
            <div className="card card-body fontsforweb_fontid_77695"
                style={{backgroundColor:'#bec3cc', fontSize:'1rem'}}>

                <div className="row" style={{alignItems:'center'}}>

                    <div className="col-lg-3">
                        <li>delfín</li>
                        <li>greenpeace</li>
                        <li>Irak (fb)</li>
                    </div>
                    <div className="col-lg-3">
                        <li>deconstruirse</li>
                        <li>Marx central</li>
                        <li>mandarina</li>
                    </div>
                    <div className="col-lg-3">
                        <li>manchesteriana</li>
                        <li>Nisman</li>
                        <li>feudal</li>
                    </div>
                    <div className="col-lg-3">
                        <li>econometrista</li>
                        <li>Finlandia</li>
                        <li>pingüino</li>
                    </div> 
                </div>
            
            </div>
        </div>
    </>
    )
}
