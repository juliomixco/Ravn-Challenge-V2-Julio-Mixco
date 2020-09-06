import React from 'react';
import { H2HigEmphasis } from '../styled/Lib';
import { ErrorCellContainer } from './ErrorCell.style';

export const ErrorCell: React.SFC<{}> = () => (
  <ErrorCellContainer>
    <H2HigEmphasis>Failed to Load Data</H2HigEmphasis>
  </ErrorCellContainer>
);
