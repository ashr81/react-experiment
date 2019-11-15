import styled from 'styled-components';
import { Flex } from 'rebass';

const MainLayout = styled(Flex).attrs(() => ({ mx: 'auto', width: ['100%', '90%', '80%'] }))`
  align-items: center;
`

export default MainLayout;