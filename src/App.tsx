import React, { FC } from 'react'
import GlobalStyle from './styles/globalStyles'
import { Footer, Navbar, ScrollTop } from './components/'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Products, Services, SignUp } from './pages'



const App: FC = () => {
  return (
    <>
      <Router basename="/concept-app-reactjs">
        <GlobalStyle />
        <ScrollTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
