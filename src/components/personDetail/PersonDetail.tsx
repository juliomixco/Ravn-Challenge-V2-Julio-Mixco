import React from 'react';
import { Person } from '../../interfaces/person.interface';
import { InfoRow } from '../infoRow/InfoRow';
import {
  PersonDetailContent,
  PersonDetailWrapper,
  SectionTitle,
} from './PersonDetail.style';

export const PersonDetail: React.SFC<{ person: Person }> = ({ person }) => {
  return (
    <PersonDetailWrapper>
      <PersonDetailContent>
        <SectionTitle>General Information</SectionTitle>
        <div className="person-detail__info">
          <InfoRow label="Eye Color" value={person.eyeColor}></InfoRow>
          <InfoRow label="Hair Color" value={person.hairColor}></InfoRow>
          <InfoRow label="Skin Color" value={person.skinColor}></InfoRow>
          <InfoRow label="Birth Year" value={person.birthYear}></InfoRow>
        </div>
        <SectionTitle>Vehicles</SectionTitle>
        <div className="person-detail__info">
          {person.vehicles.map((v, index) => (
            <InfoRow key={index} label={v.name} value=""></InfoRow>
          ))}
        </div>
      </PersonDetailContent>
    </PersonDetailWrapper>
  );
};
