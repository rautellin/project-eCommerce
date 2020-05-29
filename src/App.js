import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { HomePage } from 'pages/HomePage'
import { Footer } from './components/Footer'

export const App = () => {
  const Container = styled.main`
    height: 100vh;
    width: 100vw;
    background: red;
  `

  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/quiz" exact>
            <h1>Hi</h1>
          </Route>
          <Route path="/summary" exact>
            <h1>Hi</h1>
          </Route>
        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}