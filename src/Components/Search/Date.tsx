import React from 'react'


export const Date:any = (props:any) => {

    const { a2009, a2010, a2011, a2012, a2013, a2014, a2015, a2016, a2017, a2018, a2019, a2020 } = props
    const { setA2009, setA2010, setA2011, setA2012, setA2013, setA2014, setA2015 } = props
    const { setA2016, setA2017, setA2018, setA2019, setA2020} = props

    const desmarcar = () => {
        setA2009(false);setA2010(false);setA2011(false);setA2012(false);setA2013(false);setA2014(false)
        setA2015(false);setA2016(false);setA2017(false);setA2018(false);setA2019(false);setA2020(false)
    }

    return (
    <>
        <div className="card-header" style={{maxWidth:'350px', paddingBottom:'0', marginBottom:'20px'}}>

            <div className="row" style={{marginLeft:'20px'}}>
                
                <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                    onClick={()=>setA2009(!a2009)}>
                    <input type="checkbox" className="custom-control-input"
                    checked={a2009} onChange={()=>console.log()} />
                    <label className="custom-control-label">2009</label>
                </div>

                <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                    onClick={()=>setA2010(!a2010)}>
                    <input type="checkbox" className="custom-control-input"
                    checked={a2010} onChange={()=>console.log()} />
                    <label className="custom-control-label">2010</label>
                </div>

                <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                    onClick={()=>setA2011(!a2011)}>
                    <input type="checkbox" className="custom-control-input"
                    checked={a2011} onChange={()=>console.log()} />
                    <label className="custom-control-label">2011</label>
                </div>

                <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                    onClick={()=>setA2012(!a2012)}>
                    <input type="checkbox" className="custom-control-input"
                    checked={a2012} onChange={()=>console.log()} />
                    <label className="custom-control-label">2012</label>
                </div>
            </div>

            <div className="row rowYears" style={{marginLeft:'20px'}}>
                <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                    onClick={()=>setA2013(!a2013)}>
                    <input type="checkbox" className="custom-control-input"
                    checked={a2013} onChange={()=>console.log()} />
                    <label className="custom-control-label">2013</label>
                </div>

                <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                    onClick={()=>setA2014(!a2014)}>
                    <input type="checkbox" className="custom-control-input"
                    checked={a2014} onChange={()=>console.log()} />
                    <label className="custom-control-label">2014</label>
                </div>

                <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                    onClick={()=>setA2015(!a2015)}>
                    <input type="checkbox" className="custom-control-input"
                    checked={a2015} onChange={()=>console.log()} />
                    <label className="custom-control-label">2015</label>
                </div>

                <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                    onClick={()=>setA2016(!a2016)}>
                    <input type="checkbox" className="custom-control-input"
                    checked={a2016} onChange={()=>console.log()} />
                    <label className="custom-control-label">2016</label>
                </div>
            </div>

            <div className="row rowYears" style={{marginLeft:'20px'}}>
                <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                    onClick={()=>setA2017(!a2017)}>
                    <input type="checkbox" className="custom-control-input"
                    checked={a2017} onChange={()=>console.log()} />
                    <label className="custom-control-label">2017</label>
                </div>

                <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                    onClick={()=>setA2018(!a2018)}>
                    <input type="checkbox" className="custom-control-input"
                    checked={a2018} onChange={()=>console.log()} />
                    <label className="custom-control-label">2018</label>
                </div>

                <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                    onClick={()=>setA2019(!a2019)}>
                    <input type="checkbox" className="custom-control-input"
                    checked={a2019} onChange={()=>console.log()} />
                    <label className="custom-control-label">2019</label>
                </div>

                <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                    onClick={()=>setA2020(!a2020)}>
                    <input type="checkbox" className="custom-control-input"
                    checked={a2020} onChange={()=>console.log()} />
                    <label className="custom-control-label">2020</label>
                </div>
            </div>

            <div className="row">
                <p className="fontsforweb_fontid_77695" onClick={()=>desmarcar()} style={{
                    display:'block', margin:'auto', paddingBottom:'8px', color:'#3b5998', fontSize:'1.2rem'
                }}>
                    Desmarcar todos
                </p>
            </div>

        </div>
    </>
    )
}
