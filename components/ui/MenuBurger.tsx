import React from 'react'

const MenuBurger = ({
  isMenuOpen,
  onMenuOpen,
}: {
  isMenuOpen: boolean
  onMenuOpen: Function
}) => {
  return (
    <button
      className={`menuBurger d-flex d-md-none ${isMenuOpen ? 'active' : ''}`}
      title="menu burger"
      onClick={() => onMenuOpen(!isMenuOpen)}
    >
      <span></span>
    </button>
  )
}

export default MenuBurger
