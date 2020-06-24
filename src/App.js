import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { cart } from 'reducers/cart'
import { design } from 'reducers/design'
import { user } from 'reducers/user'
import { product } from 'reducers/product'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { HomePage } from 'pages/HomePage'
import { ProductsPage } from 'pages/ProductsPage'
import { ProductPage } from 'pages/ProductPage'
import { SearchPage } from 'pages/SearchPage'
import { HelpPage } from 'pages/HelpPage'
import { CartPage } from 'pages/CartPage'
import { SignupPage } from 'pages/SignupPage'
import { AdminPage } from 'pages/AdminPage'
import { UserPage } from 'pages/UserPage'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Pagination } from './components/Pagination'
import { Cart } from './components/Cart'
import GlobalFonts from './fonts/fonts'

const reducer = combineReducers({
  cart: cart.reducer,
  design: design.reducer,
  user: user.reducer,
  product: product.reducer
})

const store = configureStore({ reducer })

export const Container = styled.div`
height: 100vh;
width: 100vw;
`

export const PageContainer = styled.main`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalFonts />
        <Container>
          <Header />
          <Navigation />
          <Cart />
          <Switch>
            <Route path="/" exact>
              <HomePage />
              <Pagination />
              <Footer />
            </Route>
            <PageContainer>
              <Route path="/products/:path?" exact>
                <ProductsPage />
              </Route>
              <Route path="/product/:id" exact>
                <ProductPage />
              </Route>
              <Route path="/cart" exact>
                <CartPage />
              </Route>
              <Route path="/search" exact>
                <SearchPage />
              </Route>
              <Route path="/help" exact>
                <HelpPage />
              </Route>
              <Route path="/signup" exact>
                <SignupPage />
              </Route>
              <Route path="/user" exact>
                <UserPage />
              </Route>
              <Route path="/admin/:id" exact>
                <AdminPage />
              </Route>
            </PageContainer>
          </Switch>
        </Container>
      </Provider>
    </BrowserRouter>
  )
}