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
      <EmptyDetailTitle>SELECT A CHARACTER</EmptyDetailTitle>
      <EmptyDetailImage></EmptyDetailImage>
    </EmptyDetailContent>
  </EmptyDetailWrapper>
);
