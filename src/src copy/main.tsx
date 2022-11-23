import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './global'
import { Router } from './app/Routes'
import { CartContextProvider } from './contexts/CartContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartContextProvider>
      <ThemeProvider theme={ defaultTheme }>
        <BrowserRouter>
            <Router />
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </CartContextProvider>
  </React.StrictMode>
)
