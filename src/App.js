import React from 'react'
import { CookiesProvider, withCookies } from 'react-cookie'
import { Provider } from 'react-redux'
import { combineReducers } from '@reduxjs/toolkit'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import thunk from 'redux-thunk'
import { cart } from 'reducers/cart'
import { ui } from 'reducers/ui'
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
import { LoginPage } from 'pages/LoginPage'
import { AdminPage } from 'pages/AdminPage'
import { UserPage } from 'pages/UserPage'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import GlobalFonts from './fonts/fonts'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['ui', 'product']
}

const reducer = combineReducers({
  cart: cart.reducer,
  ui: ui.reducer,
  user: user.reducer,
  product: product.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

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
    <CookiesProvider>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <GlobalFonts />
            <Container>
              <Header />
              <Navigation />
              <Cart />
              <Switch>
                <Route path="/" exact>
                  <HomePage />
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
                  <Route path="/login" exact>
                    <LoginPage />
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
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </CookiesProvider>
  )
}

export default withCookies(App)