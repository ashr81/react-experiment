import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { SelectInput } from '../atoms';

const ItemText = styled.h4.attrs(() => ({ as: Flex }))`
  
`
const AvailableTimeText = styled.p.attrs(() => ({ as: Flex }))`

`

const ItemPrice = styled.h3.attrs(() => ({ as: Flex }))`

`
const OrderViewContainer = styled(Flex).attrs(() => 
  ({ justifyContent: 'center', flexDirection: 'column', p: 3, my: 3, mx: [0, 3],
  width: [1, 'calc(50% - 8px)', 'calc(33.3% - 32px)'], alignItems: 'space-between' })
)`
  min-heigth: 300px;
  background-color: ${({ theme: { colors }}) => colors.celadonSorbet};
`

const OrderView = ({ itemname, availabletime, price, count, onChange, index }) => {
  return (
    <OrderViewContainer>
      <ItemText>{itemname}</ItemText>
      <Flex justifyContent='space-between'>
        <ItemPrice>Rs. {price}</ItemPrice>
        <SelectInput data-position-index={index} value={count ? count : 0} onChange={onChange}/>
      </Flex>
      <AvailableTimeText>{availabletime}</AvailableTimeText>
    </OrderViewContainer>
  )
}

export default OrderView;