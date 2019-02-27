import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { wrapIn } from '../utils/react'
import { Provider as ThemeProvider, StyleProvider } from '../utils/theme'
import { Provider as ForexProvider } from '../hooks/forex'
import { Provider as PocketsProvider } from '../hooks/pockets'
import NavBar from './NavBar'
import Routes from './Routes'

const enhance = wrapIn(
  ThemeProvider,
  PocketsProvider,
  ForexProvider,
  StyleProvider,
  BrowserRouter,
)

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Routes />
    </Fragment>
  )
}

export default enhance(App)
