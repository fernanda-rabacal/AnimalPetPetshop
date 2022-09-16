import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './global'
import { Router } from './app/Routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={ defaultTheme }>
    <BrowserRouter>
        <Router />
      <GlobalStyle />
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
