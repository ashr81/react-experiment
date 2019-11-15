import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const OrdersPage = lazy(() => import('./pages/Orders'))
const CartPage = lazy(() => import('./pages/Cart'));


export default () => (
  <Switch>
    <Route path='/cart'>
      <CartPage/>
    </Route>
    <Route path='/'>
      <OrdersPage/>
    </Route>
  </Switch>
)