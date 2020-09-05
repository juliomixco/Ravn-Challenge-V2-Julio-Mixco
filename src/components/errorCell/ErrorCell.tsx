import React from 'react';
import { H2HighEmphasis } from '../styled/Text';
import { ErrorCellContent } from './ErrorCell.style';

export const ErrorCell: React.SFC<{}> = () => (
  <ErrorCellContent>
    <H2HighEmphasis>Failed to Load Data</H2HighEmphasis>
  </ErrorCellContent>
);
