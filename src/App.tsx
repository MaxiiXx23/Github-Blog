import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { AppRoutes } from './routes/index.routes'
import { GlobalStyle } from './styles/GlobalStyle'

import { defaultTheme } from './styles/themes/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppRoutes />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
