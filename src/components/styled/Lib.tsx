import styled from "styled-components";

export const LowEmphasis = styled.p`
  color: var(--color-text-light);
`;
export const H2 = styled.h2`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.0125em;
  color: var(--color-text-dark);
  margin: 0;
`;
export const H2HigEmphasis = styled(H2)`
  color: var(--color-text-emphasis);
`;

export const H2LowEmphasis = styled(H2)`
  color: var(--color-text-light);
`;
