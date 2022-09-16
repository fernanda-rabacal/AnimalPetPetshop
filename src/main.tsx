import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App'
import { ThemeProvider } from 'styled-components'
import { defaultThemes } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './global'
import { Router } from './app/Routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={ defaultThemes }>
        <Router />
      <GlobalStyle />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
