import React, { useContext } from 'react';
import { Navbar as NavbarContainer, NavbarRouteLink } from '../atoms';
import CartContext from '../../CartContext';

const Navbar = () => {
  const cart = useContext(CartContext)
  return (
    <NavbarContainer>
      <NavbarRouteLink to='/'>Orders</NavbarRouteLink>
      <NavbarRouteLink to='/cart'>Cart</NavbarRouteLink>
      <NavbarRouteLink to='/cart'>Selected Items: {cart.totalItems ? cart.totalItems : 0}, Total Price: {cart.totalAmount ? cart.totalAmount : 0}</NavbarRouteLink>
    </NavbarContainer>
  )
}

export default Navbar;