import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIndicatorCell = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingIndicatorContent = styled.div`
  width: 97px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LoadingIcon = styled.div`
  width: 97px;
  height: 24px;
  background-image: url(${`${process.env.PUBLIC_URL}/icons/loading-icon.svg`});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${rotate} 2s linear infinite;
`;
