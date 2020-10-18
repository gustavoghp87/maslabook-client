import React, { useState } from 'react'


export const Months:any = (props:any) => {

    const [showMonths, setShowMonths] = useState(false)
    const { one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve } = props
    const { setOne, setTwo, setThree, setFour, setFive, setSix } = props
    const { setSeven, setEight, setNine, setTen, setEleven, setTwelve } = props

    const desmarcar = () => {
        setOne(false);setTwo(false);setThree(false);setFour(false);setFive(false);setSix(false)
        setSeven(false);setEight(false);setNine(false);setTen(false);setEleven(false);setTwelve(false)
    }

    return (
    <>
        <button className="btn btn-primary fontsforweb_fontid_77695" type="button"
            style={{
                fontSize:'1rem', borderColor:'black', backgroundColor:'#3b5998', width:'200px'
            }}
            onClick={()=>setShowMonths(!showMonths)}
        >
            filtrar meses
        </button>
        
        <div className="card-header" style={{
            maxWidth:'350px', paddingBottom:'0', display: showMonths ? 'block' : 'none'}}>
        
            <div className="row" style={{marginLeft:'20px', paddingRight:'0'}}>

                <div className="col-xs-3" style={{paddingLeft:'0'}}>
                    <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                        onClick={()=>setOne(!one)}>
                        <input type="checkbox" className="custom-control-input" checked={one}
                            onChange={()=>console.log()} />
                        <label className="custom-control-label">enero</label>
                    </div>

                    <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                        onClick={()=>setTwo(!two)}>
                        <input type="checkbox" className="custom-control-input" checked={two}
                            onChange={()=>console.log()} />
                        <label className="custom-control-label">febre</label>
                    </div>
                    
                    <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                        onClick={()=>setThree(!three)}>
                        <input type="checkbox" className="custom-control-input" checked={three}
                            onChange={()=>console.log()} />
                        <label className="custom-control-label">marzo</label>
                    </div>
                </div>

                <div className="col-xs-3" style={{paddingLeft:'0'}}>
                    <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                        onClick={()=>setFour(!four)}>
                        <input type="checkbox" className="custom-control-input" checked={four}
                            onChange={()=>console.log()} />
                        <label className="custom-control-label">abril</label>
                    </div>

                    <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                        onClick={()=>setFive(!five)}>
                        <input type="checkbox" className="custom-control-input" checked={five}
                            onChange={()=>console.log()} />
                        <label className="custom-control-label">mayo</label>
                    </div>

                    <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                        onClick={()=>setSix(!six)}>
                        <input type="checkbox" className="custom-control-input" checked={six}
                            onChange={()=>console.log()} />
                        <label className="custom-control-label">junio</label>
                    </div>
                </div>

                <div className="col-xs-3" style={{paddingLeft:'0'}}>

                    <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                        onClick={()=>setSeven(!seven)}>
                        <input type="checkbox" className="custom-control-input" checked={seven}
                            onChange={()=>console.log()} />
                        <label className="custom-control-label">julio</label>
                    </div>

                    <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                        onClick={()=>setEight(!eight)}>
                        <input type="checkbox" className="custom-control-input" checked={eight}
                            onChange={()=>console.log()} />
                        <label className="custom-control-label">agost</label>
                    </div>

                    <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                        onClick={()=>setNine(!nine)}>
                        <input type="checkbox" className="custom-control-input" checked={nine}
                            onChange={()=>console.log()} />
                        <label className="custom-control-label">septi</label>
                    </div>
                </div>

                <div className="col-xs-3" style={{paddingLeft:'0'}}>
                <   div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                        onClick={()=>setTen(!ten)}>
                        <input type="checkbox" className="custom-control-input" checked={ten}
                            onChange={()=>console.log()} />
                        <label className="custom-control-label">octub</label>
                    </div>

                    <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                        onClick={()=>setEleven(!eleven)}>
                        <input type="checkbox" className="custom-control-input" checked={eleven}
                            onChange={()=>console.log()} />
                        <label className="custom-control-label">novie</label>
                    </div>

                    <div className="custom-control custom-checkbox" style={{marginRight:'8px'}}
                        onClick={()=>setTwelve(!twelve)}>
                        <input type="checkbox" className="custom-control-input" checked={twelve}
                            onChange={()=>console.log()} />
                        <label className="custom-control-label">dicie</label>
                    </div>
                </div>

            </div>

            <div className="row" style={{marginTop:'15px'}}>
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
