import React from 'react'


export const Resultados:any = (props:any) => {

    const { posts } = props

    return (
    <>
        <div className="container" style={{paddingTop:'40px', paddingBottom:'80px', textAlign:'center'}}>

            {posts && posts.posts && !!posts.posts.length &&

                <h2 className="fontsforweb_fontid_77695" 
                    style={{display:'block', margin:'auto', marginBottom:'30px'}}>
                    Se encontraron {posts.posts.length} resultados
                </h2>
            }

            {posts && posts.posts && !!posts.posts.length &&
                posts.posts.map((post:any) => (

                <div className="col" key={post.innerId}>

                    <div className="row" style={{display:'block', margin:'auto'}}>
                        <p className="fontsforweb_fontid_77695"
                            style={{textAlign:'center', fontSize:'1rem'}}>
                            {post.date.split('.')[0]}
                        </p>
                    </div>

                    <div className="row" style={{display:'block', margin:'auto'}}>
                        <h3 className="fontsforweb_fontid_77695"
                            style={{fontSize:'1.5rem', textAlign:'center'}}>
                            {post.user}
                        </h3>
                    </div>
                
                    <div className="row"
                        style={{display:'block', margin:'auto', paddingBottom:'24px'}}>

                        <div className="card-header">
                            <p className="far fontsforweb_fontid_77695"
                                style={{
                                    marginLeft:'4%', marginRight:'4%', fontSize:'1.2rem',
                                    fontStyle:'normal', textAlign:'justify', textIndent:'2%'
                                }}
                            >  
                                {post.post}
                            </p>
                        </div>

                        <p className="fontsforweb_fontid_77695"
                            style={{display:'block', margin:'auto', paddingTop:'36px', fontSize:'1rem'}}>
                            ver en {posts.postUrl}

                            <a href={posts.postUrl} target="_blank" rel="noopener noreferrer">
                                <img src="/images/tw.png" alt="tw" className="tw"
                                    style={{
                                        maxHeight:'37px',
                                        display: post.socialNet==='tw' ? 'block' : 'none',
                                        margin:'auto'
                                    }}
                                /> 
                                <img src="/images/fb.png" alt="fb" className="fb"
                                    style={{
                                        maxHeight:'60px',
                                        display: post.socialNet==='fb' ? 'block' : 'none',
                                        margin:'auto'
                                    }}
                                />
                            </a>

                        </p>
                    </div>

                    <hr style={{
                        margin:'40px auto',
                        width:'100%',
                        border:'1px solid #3b5998',
                        borderRadius:'5px'
                    }} />

                </div>
            ))}
        </div>
    </>
    )
}
