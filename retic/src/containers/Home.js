import React from 'react'
import { withSiteData } from 'react-static'
import glamorous from 'glamorous'
//
import logoImg from '../img/Avg3.jpg'

const LogoImage = glamorous.img({
  maxWidth: '75%',
})

const HeadTell = glamorous.h1(tw('text-white'))

const Mania = glamorous.p(tw('text-green'))

export default withSiteData(() => (
  <div>
    <HeadTell style={{ textAlign: 'center' }}>Avenger : Infinity War Guideline</HeadTell>
    <LogoImage src={logoImg} alt="" />
    <Mania>Hello Everyone who love Marvel's story</Mania>
  </div>
))
