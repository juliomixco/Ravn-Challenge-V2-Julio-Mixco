import styled from 'styled-components';

export const LoadingIndicatorCell = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  width: 97px;
  height: 24px;
  background-image: url(${`${process.env.PUBLIC_URL}/icons/LoadingIndicator.svg`});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
