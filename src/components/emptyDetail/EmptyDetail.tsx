import React from 'react';
import {
  EmptyDetailWrapper,
  EmptyDetailImage,
  EmptyDetailTitle,
  EmptyDetailContent,
} from './EmptyDetail.style';

export const EmptyDetail: React.SFC<{}> = () => (
  <EmptyDetailWrapper>
    <EmptyDetailContent>
      <EmptyDetailTitle>Select a character</EmptyDetailTitle>
      <EmptyDetailImage></EmptyDetailImage>
    </EmptyDetailContent>
  </EmptyDetailWrapper>
);
