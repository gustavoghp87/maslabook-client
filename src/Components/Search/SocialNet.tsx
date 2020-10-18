import React from 'react'


export const SocialNet:any = (props:any) => {

    const { socialNet, setSocialNet, third, setThird } = props

    return (
    <>
        <div style={{width:'300px', display:'block', marginLeft:'auto', paddingRight:'32px'}}>

            <div className="btn-group btn-group-toggle fontsforweb_fontid_77695" data-toggle="buttons"
                style={{fontSize:'1.2rem', margin:'auto', display:'flex', alignItems:'center'}}
            >
                <label className={socialNet==='both' ? "btn btn-secondary active" : "btn btn-secondary"}
                    onClick={()=>setSocialNet('both')}>
                    <input type="radio" onChange={()=>console.log()} />
                    Facebook + Twitter
                </label>

                <label className={socialNet==='fb' ? "btn btn-secondary active" : "btn btn-secondary"}
                    onClick={()=>setSocialNet("fb")}>
                    <input type="radio" onChange={()=>console.log()} />
                    Solo Facebook
                </label>

                <label className={socialNet==='tw' ? "btn btn-secondary active" : "btn btn-secondary"}
                    onClick={()=>setSocialNet("tw")}>
                    <input type="radio" onChange={()=>console.log()} />
                    Solo Twitter
                </label>
            </div>

            <div className="custom-control custom-checkbox"
                style={{display:'block', margin:'auto', paddingTop:'10px', paddingBottom:'10px'}}
                onClick={()=>setThird(!third)}
            >
                <input type="checkbox" className="custom-control-input"
                    onChange={()=>console.log()} checked={third}
                />
                <label className="custom-control-label">
                    Ignorar los tuits de terceros
                </label>
            </div>

        </div>
    </>
    )
}
