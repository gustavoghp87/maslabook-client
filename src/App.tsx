import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from "react-router-dom"
import { NavBar } from './Components/NavBar'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Maslabook } from './Components/Maslabook'
import { Maslastory } from './Components/Maslastory'
import { Maslaboard } from './Components/Maslaboard'
import { Maslazoom } from './Components/Maslazoom'
import './css/App.css'


export const mobile = window.screen.width<990 ? true : false

function App() {

  const appCss = {
    maxWidth: '100%'
  }

  return (
    <Suspense fallback={(<div>Cargando...</div>)}>
      <NavBar />
      <Header />
      <div style={appCss}>
        <Switch>
          <Redirect exact path='/' to="/maslabook" />
          <Route exact path='/maslabook' component={Maslabook} />
          <Route exact path='/maslastory' component={Maslastory} />
          <Route exact path='/maslaboard' component={Maslaboard} />
          <Route exact path='/maslazoom' component={Maslazoom} />
          <Route path='/' component={Maslabook} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  )
}

export default App