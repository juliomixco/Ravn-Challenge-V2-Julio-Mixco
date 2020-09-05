import styled from "styled-components";

export const PageHeader = styled.header`
  display: flex;
  align-items: center;
  padding-left: 33px;
  width: 100%;
  height: var(--header-height);
  background: var(--color-ravn-black);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const HeaderTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.0125em;
  color: var(--color-gray-6);
`;

export const PageContent = styled.div`
  height: calc(100% - var(--header-height));
  width: 100%;
`;
