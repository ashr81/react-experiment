import React from 'react';
import { Flex } from 'rebass';
import { Text } from '../atoms';

const CartItem = ({
  itemName,
  price,
  count
}) => {
  return (
    <Flex>
      <Text>{itemName}</Text>
      <Text>Count({count}) * Price({price})</Text>
      <Text> = {count*price}</Text>
    </Flex>
  )
}

export default CartItem;