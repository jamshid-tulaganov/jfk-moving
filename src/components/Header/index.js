import React from 'react'
import HeaderMain from './HeaderMain'
import HeaderNav from './HeaderNav'
import HeaderNavBottom from "./HeaderNavBottom/headerNavBottom";

function Header() {
  return (
    <>
      <HeaderNav />
      <HeaderNavBottom />
      <HeaderMain />
    </>
  )
}

export default Header