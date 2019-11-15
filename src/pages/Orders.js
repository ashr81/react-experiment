import React, { useEffect, useReducer, useContext, memo } from 'react';
import { MainLayout } from '../components/atoms';
import { OrderView } from '../components/organisms';
import reducer, {
  ADD_DATA, UPDATE_CART
} from '../reducers/orders';
import CartContext from '../CartContext';

const initialState = {
  orders: []
}
const OrdersPage = () => {
  const { updateCart } = useContext(CartContext);
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json')
    .then(res => res.json())
    .then(res => {
      dispatch({ type: ADD_DATA, data: res })
    })
    .catch(err => console.error);
  }, [])

  useEffect(() => {
    const cartValues = state.orders.reduce((acc, order) => {
      const count = order.count ? order.count : 0
      return ({
        totalItems: acc.totalItems + count,
        totalAmount: acc.totalAmount + (count * order.price),
        selectedOrders: count > 0 ? [...acc.selectedOrders, {...order}] : acc.selectedOrders
      })
    }, {totalItems: 0, totalAmount: 0, selectedOrders: []})
    updateCart(cartValues)
  }, [state.orders, updateCart])

  const onChange = (event) => {
    const { positionIndex } = event.currentTarget.dataset;
    dispatch({
      type: UPDATE_CART,
      positionIndex: parseInt(positionIndex),
      count: parseInt(event.currentTarget.value)
    })
  }
  return (
    <MainLayout flexDirection='row' flexWrap='wrap'>
      {state.orders.map((order, i) => <OrderView key={i} {...order} index={i} onChange={onChange}/>)}
    </MainLayout>
  ) 
}

export default memo(OrdersPage);