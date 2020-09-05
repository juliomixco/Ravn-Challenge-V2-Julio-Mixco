import styled from 'styled-components';
import { colors } from './variables';

export const H2 = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.0125em;
  color: ${colors.black};
`;

export const H2LowEmphasis = styled(H2)`
  color: ${colors.light};
`;

export const H2HighEmphasis = styled(H2)`
  color: ${colors.emphasis};
`;

export const LowEmphasis = styled.p`
  color: ${colors.light};
`;
