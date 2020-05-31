import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { HomePage } from 'pages/HomePage'
import { SearchPage } from 'pages/SearchPage'
import { LoginPage } from 'pages/LoginPage'
import { HelpPage } from 'pages/HelpPage'
import { CartPage } from 'pages/CartPage'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Pagination } from './components/Pagination'
import { Arrows } from './components/Arrows'

export const App = () => {
  const Container = styled.main`
    height: 100vh;
    width: 100vw;
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
          <Route path="/cart" exact>
            <CartPage />
          </Route>
        </Switch>
        <Arrows />
        <Pagination />
        <Footer />
      </Container>
    </BrowserRouter>
  )
}