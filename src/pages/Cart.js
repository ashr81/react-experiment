import React, { useContext } from 'react';
import MainLayout from '../components/atoms/MainLayout';
import { Flex } from 'rebass';
import { CartItem } from '../components/organisms';
import { Text } from '../components/atoms';
import CartContext from '../CartContext';

const CartPage = () => {
  const { selectedOrders } = useContext(CartContext);
  return (
    <MainLayout flexDirection='column'>
      <Text as='h2'>Cart:</Text>
      <Flex flexDirection='column'>
        {selectedOrders.map(order => <CartItem itemName={order.itemname} price={order.price} count={order.count}/>)}
      </Flex>
    </MainLayout>
  ) 
}

export default CartPage;