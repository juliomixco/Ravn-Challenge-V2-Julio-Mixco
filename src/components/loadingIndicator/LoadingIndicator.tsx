import React from 'react';
import {
  LoadingIndicatorCell,
  LoadingIcon,
  LoadingIndicatorContent,
} from './LoadingIndicator.style';
import { H2LowEmphasis } from '../styled/Lib';

export const LoadingIndicator: React.SFC<{}> = () => (
  <LoadingIndicatorCell>
    <LoadingIndicatorContent>
      <LoadingIcon></LoadingIcon> <H2LowEmphasis>Loading</H2LowEmphasis>
    </LoadingIndicatorContent>
  </LoadingIndicatorCell>
);
