import styled from 'styled-components';
import { Flex } from 'rebass';

const Text = styled(Flex).attrs(({ as }) => ({ as }))`
  font-size: ${({ theme: { fontSizes }, fontSize}) => fontSizes[fontSize]};
  font-weight: ${({ theme: { fontWeights }, fontWeight}) => fontWeights[fontWeight]};
`

Text.defaultProps = {
  fontSize: 'md',
  fontWeight: 'regular',
  as: 'p'
}

export default Text;