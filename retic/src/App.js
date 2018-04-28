import React from 'react'
import { Router, Link } from 'react-static'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

css.global('html, body', tw('font-demo-serif bg-grey-darkest font-light text-base m-0 p-0'))
css.global('a', tw('no-underline text-demo-color font-bold'))
const NavStyled = glamorous.nav(tw('w-full bg-yellow'))
const LinkStyled = glamorous(Link)(tw('text-black p-4 inline-block'))
const Content = glamorous.div(tw('p-4'))

const App = () => (
  <Router>
    <div>
      <NavStyled>
        <LinkStyled to="/">Home</LinkStyled>
        <LinkStyled to="/Character">Character</LinkStyled>
      </NavStyled>
      <Content>
        <Routes />
      </Content>
    </div>
  </Router>
)

export default hot(module)(App)
