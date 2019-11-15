import React, { useCallback } from 'react';
import styled from 'styled-components';
import { RouteLink } from '.';
import { Flex } from 'rebass';
import { useHistory } from 'react-router-dom';

const NavbarRouteLinkStyle = styled(Flex).attrs(() => ({ p: [4] }))`
  color: ${({ theme: { colors }}) => colors.mercury};
  cursor: pointer;
  :hover {
    color: ${({ theme: { colors }}) => colors.irisIce};
    background-color: ${({ theme: { colors }}) => colors.vividBurgundy};
  }
`

const RouteLinkExtend = styled(RouteLink)`
  color: inherit;
  width: 100%;
  height: 100%;
`

const NavbarRouteLink = ({ children, to }) => {
  const { push } = useHistory()
  return(
    <NavbarRouteLinkStyle onClick={useCallback(() => push(to), [push, to])}>
      <RouteLinkExtend to={to}>
        {children}
      </RouteLinkExtend>
    </NavbarRouteLinkStyle>
  )
}

export default NavbarRouteLink;