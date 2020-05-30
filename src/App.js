import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { HomePage } from 'pages/HomePage'
import { SearchPage } from 'pages/SearchPage'
import { LoginPage } from 'pages/LoginPage'
import { HelpPage } from 'pages/HelpPage'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export const App = () => {
  const Container = styled.main`
    height: 100vh;
    width: 100vw;
    background: red;
    padding: 0 30px;
  `

  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/search" exact>
            <SearchPage />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/help" exact>
            <HelpPage />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}