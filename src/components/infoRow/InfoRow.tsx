import React from 'react';
import { H2, H2LowEmphasis } from '../styled/Lib';
import { InfoItem } from './InfoRow.style';

interface InfoRowProps {
  label: string;
  value: string;
}

export const InfoRow: React.SFC<InfoRowProps> = ({ label, value }) => (
  <InfoItem>
    <H2LowEmphasis>{label}</H2LowEmphasis>
    <H2>{value}</H2>
  </InfoItem>
);
