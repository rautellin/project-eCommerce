import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { cart } from 'reducers/cart'
import { homePage } from 'reducers/homePage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { HomePage } from 'pages/HomePage'
import { SearchPage } from 'pages/SearchPage'
import { LoginPage } from 'pages/LoginPage'
import { HelpPage } from 'pages/HelpPage'
import { CartPage } from 'pages/CartPage'
import { SignupPage } from 'pages/SignupPage'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Pagination } from './components/Pagination'
import { Arrows } from './components/Arrows'

const reducer = combineReducers({
  cart: cart.reducer,
  homePage: homePage.reducer
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
              <Arrows />
              <Pagination />
              <Footer />
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
            <Route path="/signup" exact>
              <SignupPage />
            </Route>
          </Switch>
        </Container>
      </Provider>
    </BrowserRouter>
  )
}