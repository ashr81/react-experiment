import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from 'rebass';

const RouteLink = styled(Flex).attrs(() => ({ as: Link }))`
  text-decoration: none;
  cursor: pointer;
`

export default RouteLink;