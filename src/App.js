import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { nav } from 'reducers/nav'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { HomePage } from 'pages/HomePage'
import { SearchPage } from 'pages/SearchPage'
import { LoginPage } from 'pages/LoginPage'
import { HelpPage } from 'pages/HelpPage'
import { CartPage } from 'pages/CartPage'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Pagination } from './components/Pagination'
import { Arrows } from './components/Arrows'

const reducer = combineReducers({
  nav: nav.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  const Container = styled.main`
    height: 100vh;
    width: 100vw;
  `

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Container>
          <Header />
          <Navigation />
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
      </Provider>
    </BrowserRouter>
  )
}