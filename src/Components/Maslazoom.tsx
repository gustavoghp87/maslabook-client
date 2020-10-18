import React, { useEffect } from 'react'
import Axios from 'axios'
import { SERVER } from '../Config'
import { mobile } from '../App'
import { maslazooms, typeMaslazoom } from './Zooms/maslazooms'


export const Maslazoom = () => {

  useEffect(() => {Axios(`${SERVER}/api/maslazoom`)}, [])

  return (
  <>
    <div className="container maslazoom" style={{maxWidth: mobile ? '100%' : '80%', marginBottom:'100px'}}>

      {maslazooms && !!maslazooms && maslazooms.map((maslazoom:typeMaslazoom, index:number) => (

        <div key={index}>
          <hr style={{marginBottom: '35px', width: '100%', border: '1px solid #3b5998', borderRadius: '5px'}} />
          <h2 className="fontsforweb_fontid_77695" style={{textAlign: 'center', paddingBottom: '25px'}}>
            {maslazoom.title}
          </h2>

          <div className="container" style={{paddingBottom: '100px'}}>
            <div className="row">
              <div className="col-lg-7" style={{display: 'block', margin: 'auto', marginLeft: '0%', marginRight: '0%'}}>
                <iframe width={700} height={400} style={{margin:'auto', maxWidth:'100%'}}
                  src={maslazoom.src} frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={index.toString()} />
              </div>
              <div className="col-lg-5">
                <div className="card-header destacados">
                  <h3> {maslazoom.h3} </h3>
                  <h4> {maslazoom.h4} </h4>
                  {maslazoom.far.map((far:string) => (
                    <> <i className="far"> {far} </i> <br /> </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}


      <hr style={{marginBottom: '35px', width: '100%', border: '1px solid #3b5998', borderRadius: '5px'}} />
      
      
      <div className="row" style={{paddingBottom: '15px'}}>
        <div className="col-md-4 col-sm -6">
          <p className="fontsforweb_fontid_77695" style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '5px', marginTop: '20px'}}> maslazoom 17 </p>
          <iframe style={{display: 'block', margin: 'auto', width: '200px'}} src="https://www.youtube.com/embed/8a7O3I_yVxA" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="1" />
        </div>
        <div className="col-md-4 col-sm -6">
          <p className="fontsforweb_fontid_77695" style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '5px', marginTop: '20px'}}> maslazoom 16 </p>
          <iframe style={{display: 'block', margin: 'auto', width: '200px'}} src="https://www.youtube.com/embed/DAb5JROQ-qc" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="1" />
        </div>
        <div className="col-md-4 col-sm -6">
          <p className="fontsforweb_fontid_77695" style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '5px', marginTop: '20px'}}> maslazoom 15 </p>
          <iframe style={{display: 'block', margin: 'auto', width: '200px'}} src="https://www.youtube.com/embed/5fjrPgJTV1E" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="1" />
        </div>
      </div>
      <div className="row" style={{paddingBottom: '15px'}}>
        <div className="col-md-4 col-sm -6">
          <p className="fontsforweb_fontid_77695" style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '5px', marginTop: '20px'}}> maslazoom 14 </p>
          <iframe style={{display: 'block', margin: 'auto', width: '200px'}} src="https://www.youtube.com/embed/2STSGulYUBE" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="1" />
        </div>
        <div className="col-md-4 col-sm -6">
          <p className="fontsforweb_fontid_77695" style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '5px', marginTop: '20px'}}> maslazoom 13 </p>
          <iframe style={{display: 'block', margin: 'auto', width: '200px'}} src="https://www.youtube.com/embed/J5tYPG3yiT4" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="1" />
        </div>
        <div className="col-md-4 col-sm -6">
          <p className="fontsforweb_fontid_77695" style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '5px', marginTop: '20px'}}> maslazoom 12 </p>
          <iframe style={{display: 'block', margin: 'auto', width: '200px'}} src="https://www.youtube.com/embed/SDSQi8i6XHc" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="1" />
        </div>
      </div>
      <div className="row" style={{paddingBottom: '15px'}}>
        <div className="col-md-4 col-sm -6">
          <p className="fontsforweb_fontid_77695" style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '5px', marginTop: '20px'}}> maslazoom 11 </p>
          <iframe style={{display: 'block', margin: 'auto', width: '200px'}} src="https://www.youtube.com/embed/14-u2lxGDrw" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="1" />
        </div>
        <div className="col-md-4 col-sm -6">
          <p className="fontsforweb_fontid_77695" style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '5px', marginTop: '20px'}}> maslazoom 10 </p>
          <iframe style={{display: 'block', margin: 'auto', width: '200px'}} src="https://www.youtube.com/embed/GVHsbJMN30s" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="1" />
        </div>
        <div className="col-md-4 col-sm -6">
          <p className="fontsforweb_fontid_77695" style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '5px', marginTop: '20px'}}> maslazoom 09 </p>
          <iframe style={{display: 'block', margin: 'auto', width: '200px'}} src="https://www.youtube.com/embed/YOJ9U7dlowA" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="1" />
        </div>
      </div>
      <div className="row" style={{paddingBottom: '15px'}}>
        <div className="col-md-4 col-sm -6">
          <p className="fontsforweb_fontid_77695" style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '5px', marginTop: '20px'}}> maslazoom 08 </p>
          <iframe style={{display: 'block', margin: 'auto', width: '200px'}} src="https://www.youtube.com/embed/MTQ9w9TJe04" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="1" />
        </div>
        <div className="col-md-4 col-sm -6">
          <p className="fontsforweb_fontid_77695" style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '5px', marginTop: '20px'}}> maslazoom 07 </p>
          <iframe style={{display: 'block', margin: 'auto', width: '200px'}} src="https://www.youtube.com/embed/-z_XzSyZWOk" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="1" />
        </div>
        <div className="col-md-4 col-sm -6">
          <p className="fontsforweb_fontid_77695" style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '5px', marginTop: '20px'}}> maslazoom 06 </p>
          <iframe style={{display: 'block', margin: 'auto', width: '200px'}} src="https://www.youtube.com/embed/WSZdvAanU2I" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="1" />
        </div>
      </div>
      <div className="row" style={{paddingBottom: '15px'}}>
        <div className="col-md-4 col-sm -6">
          <p className="fontsforweb_fontid_77695" style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '5px', marginTop: '20px'}}> maslazoom 05 </p>
          <iframe style={{display: 'block', margin: 'auto', width: '200px'}} src="https://www.youtube.com/embed/WoE1_cX-JxA" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="1" />
        </div>
        <div className="col-md-4 col-sm -6">
          <p className="fontsforweb_fontid_77695" style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '5px', marginTop: '20px'}}> maslazoom 04 </p>
          <iframe style={{display: 'block', margin: 'auto', width: '200px'}} src="https://www.youtube.com/embed/zwTAWATwD8U" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="1" />
        </div>
        <div className="col-md-4 col-sm -6">
          <p className="fontsforweb_fontid_77695" style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '5px', marginTop: '20px'}}> maslazoom 03 </p>
          <iframe style={{display: 'block', margin: 'auto', width: '200px'}} src="https://www.youtube.com/embed/poT2rVYEcMg" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="1" />
        </div>
      </div>
    </div>
  </>
  )
}
