import { lazy } from 'react';

const Navbar = lazy(() => import('./Navbar'));
const OrderView = lazy(() => import('./OrderView'));
const CartItem = lazy(() => import('./CartItem'));

export { 
  Navbar,
  OrderView,
  CartItem
}