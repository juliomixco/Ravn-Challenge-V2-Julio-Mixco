import React from 'react';
import { LoadingIndicatorCell, LoadingText } from './LoadingIndicator.style';

export const LoadingIndicator: React.SFC<{}> = () => (
  <LoadingIndicatorCell>
    <LoadingText></LoadingText>
  </LoadingIndicatorCell>
);
