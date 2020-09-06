import styled from 'styled-components';

export const EmptyDetailWrapper = styled.div`
  padding: 0px 100px;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyDetailContent = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const EmptyDetailImage = styled.div`
  height: 120px;
  width: 120px;
  background-image: url(${`${process.env.PUBLIC_URL}/images/bb8.png`});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const EmptyDetailTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.0125em;
  color: var(--color-black);
`;
