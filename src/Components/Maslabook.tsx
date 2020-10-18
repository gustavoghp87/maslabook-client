import React, { useState } from 'react'
import { Input } from './Search/Input'
import { SocialNet } from './Search/SocialNet'
import { Date } from './Search/Date'
import { Months } from './Search/Months'
import { Recomend } from './Search/Recomend'
import { Resultados } from './Search/Result'
import { Row, Col } from 'react-bootstrap'
import Axios from 'axios'
import { SERVER } from '../Config'


export const Maslabook = () => {

    const [words, setWords] = useState('')
    type socialNet = 'both' | 'fb' | 'tw'
    const [socialNet, setSocialNet] = useState<socialNet>('both')
    const [third, setThird] = useState(true)

    const [a2009, setA2009] = useState(true)
    const [a2010, setA2010] = useState(true)
    const [a2011, setA2011] = useState(true)
    const [a2012, setA2012] = useState(true)
    const [a2013, setA2013] = useState(true)
    const [a2014, setA2014] = useState(true)
    const [a2015, setA2015] = useState(true)
    const [a2016, setA2016] = useState(true)
    const [a2017, setA2017] = useState(true)
    const [a2018, setA2018] = useState(true)
    const [a2019, setA2019] = useState(true)
    const [a2020, setA2020] = useState(true)

    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(true)
    const [three, setThree] = useState(true)
    const [four, setFour] = useState(true)
    const [five, setFive] = useState(true)
    const [six, setSix] = useState(true)
    const [seven, setSeven] = useState(true)
    const [eight, setEight] = useState(true)
    const [nine, setNine] = useState(true)
    const [ten, setTen] = useState(true)
    const [eleven, setEleven] = useState(true)
    const [twelve, setTwelve] = useState(true)

    const [posts, setPosts] = useState({posts:[]})


    const enviar = async () => {
        console.log("Enviando:", words, socialNet, a2015, two, third)
        const pack = {
            words,
            socialNet, third,
            a2009, a2010, a2011, a2012, a2013, a2014, a2015, a2016, a2017, a2018, a2019, a2020,
            one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve
        }
        const axios = await Axios.post(`${SERVER}/api/search`, pack)
        const data = await axios.data
        setPosts({posts:data.posts})
        console.log(data);
        
    }


    return (
    <>
        <Input setWords={setWords} enviar={enviar} />

        <Row>

            <Col lg={6}>

                <SocialNet
                    socialNet={socialNet}
                    setSocialNet={setSocialNet}
                    third={third}
                    setThird={setThird}
                />

            </Col>

            <Col lg={6}>

                <Date
                    a2009={a2009} setA2009={setA2009}
                    a2010={a2010} setA2010={setA2010}
                    a2011={a2011} setA2011={setA2011}
                    a2012={a2012} setA2012={setA2012}
                    a2013={a2013} setA2013={setA2013}
                    a2014={a2014} setA2014={setA2014}
                    a2015={a2015} setA2015={setA2015}
                    a2016={a2016} setA2016={setA2016}
                    a2017={a2017} setA2017={setA2017}
                    a2018={a2018} setA2018={setA2018}
                    a2019={a2019} setA2019={setA2019}
                    a2020={a2020} setA2020={setA2020}
                />

                <Months
                    one={one} setOne={setOne}
                    two={two} setTwo={setTwo}
                    three={three} setThree={setThree}
                    four={four} setFour={setFour}
                    five={five} setFive={setFive}
                    six={six} setSix={setSix}
                    seven={seven} setSeven={setSeven}
                    eight={eight} setEight={setEight}
                    nine={nine} setNine={setNine}
                    ten={ten} setTen={setTen}
                    eleven={eleven} setEleven={setEleven}
                    twelve={twelve} setTwelve={setTwelve}
                />

            </Col>
        </Row>


        <Recomend />

        <hr style={{marginTop:'70px', width:'100%', border:'1px solid #3b5998', borderRadius:'5px'}} />

        <Resultados posts={posts} />
    </>
    )
}
