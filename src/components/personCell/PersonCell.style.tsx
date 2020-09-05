import styled from 'styled-components';

export const StyledPersonCell = styled.div`
  width: 100%;
  height: 69px;
  padding-left: 16px;
`;

export const PersonCellContent = styled.div`
  display: flex;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const PersonCellBottomBorder = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const PersonCellInfo = styled.div`
  flex-grow: 1;
`;

export const PersonCellArrow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  width: 36px;
`;

export const ArrowIcon = styled.span`
  display: inline-block;
  width: 8px;
  height: 12px;
  background-image: url(${`${process.env.PUBLIC_URL}/icons/chevron-right.svg`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
