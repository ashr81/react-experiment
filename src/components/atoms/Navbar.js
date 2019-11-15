import styled from 'styled-components';
import { Flex } from 'rebass';

const Navbar = styled(Flex)`
  height: 80px;
  width: 100%;
  background-color: ${({ theme: { colors }}) => colors.suryaRed};
  color: ${({ theme: { colors }}) => colors.peacefulRain};
`

export default Navbar;