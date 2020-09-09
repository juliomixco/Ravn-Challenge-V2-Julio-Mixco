import React from 'react';
import { Person } from '../../interfaces/person.interface';
import {
  PersonCell,
  PersonCellContent,
  PersonCellInfo,
  PersonCellArrow,
  ArrowIcon,
  PersonCellBottomBorder,
} from './PersonItem.style';
import { LowEmphasis, H2 } from '../styled/Lib';
import { Species } from '../../interfaces/species.interface';

interface PersonItemProps {
  person: Person;
  onClick?: () => void;
}

function formatSpecies(species: Species[]) {
  return species
    .map((s) => s?.name)
    .filter((x) => x)
    .join(', ');
}

export const PersonItem: React.SFC<PersonItemProps> = ({ person, onClick }) => (
  <PersonCell onClick={onClick}>
    <PersonCellContent>
      <PersonCellInfo>
        <H2>{person.name}</H2>
        <LowEmphasis>
          {person.species?.name || ''} from {person.homeworld?.name}
        </LowEmphasis>
      </PersonCellInfo>
      <PersonCellArrow>
        <ArrowIcon></ArrowIcon>
      </PersonCellArrow>
    </PersonCellContent>
    <PersonCellBottomBorder></PersonCellBottomBorder>
  </PersonCell>
);

PersonItem.defaultProps = {
  onClick: () => {},
};
