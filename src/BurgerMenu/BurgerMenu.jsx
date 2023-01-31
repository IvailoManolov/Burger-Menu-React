import React from 'react'
import { useState } from 'react'
import "./BurgerMenu.css"

const BurgerMenu = () => {

  const[isOpen,setIsOpen] = useState(false)

  const setOpenedState = () => {
    let reverseOpened = isOpen

    setIsOpen(!reverseOpened)
  }

  return (
    <div className= {isOpen ? 'menu-button' : 'menu-button-open'} onClick={() => setOpenedState()}>
        <div className="menu-button-burger" >
        </div>
    </div>
  )
}

export default BurgerMenu