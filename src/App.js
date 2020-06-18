import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { cart } from 'reducers/cart'
import { homePage } from 'reducers/homePage'
import { user } from 'reducers/user'
import { product } from 'reducers/product'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { HomePage } from 'pages/HomePage'
import { ProductsPage } from 'pages/ProductsPage'
import { ProductPage } from 'pages/ProductPage'
import { SearchPage } from 'pages/SearchPage'
import { LoginPage } from 'pages/LoginPage'
import { HelpPage } from 'pages/HelpPage'
import { CartPage } from 'pages/CartPage'
import { SignupPage } from 'pages/SignupPage'
import { AdminPage } from 'pages/AdminPage'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Pagination } from './components/Pagination'
import { Arrows } from './components/Arrows'
import GlobalFonts from './fonts/fonts'

const reducer = combineReducers({
  cart: cart.reducer,
  homePage: homePage.reducer,
  user: user.reducer,
  product: product.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  const Container = styled.div`
    height: 100vh;
    width: 100vw;
  `

  const PageContainer = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalFonts />
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
            <PageContainer>
              <Route path="/products" exact>
                <ProductsPage />
              </Route>
              <Route path="/product" exact>
                <ProductPage />
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
              <Route path="/admin" exact>
                <AdminPage />
              </Route>
            </PageContainer>
          </Switch>
        </Container>
      </Provider>
    </BrowserRouter>
  )
}