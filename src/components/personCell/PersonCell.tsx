import React from 'react';
import { H2, LowEmphasis } from '../styled/Text';
import { Person } from '../../interfaces/person.interface';
import { Species } from '../../interfaces/species.interface';
import {
  StyledPersonCell,
  PersonCellContent,
  PersonCellInfo,
  PersonCellArrow,
  ArrowIcon,
  PersonCellBottomBorder,
} from './PersonCell.style';

interface PersonCellProps {
  person: Person;
  onClick: () => void;
}

function formatSpecies(species: Species[] = []) {
  return species.map((s) => s.name).join(', ');
}

export const PersonCell: React.SFC<PersonCellProps> = (props) => (
  <StyledPersonCell onClick={props.onClick}>
    <PersonCellContent>
      <PersonCellInfo>
        <H2>{props.person.name}</H2>
        <LowEmphasis>
          {formatSpecies(props.person.species)} from{' '}
          {props.person?.homeworld?.name}
        </LowEmphasis>
      </PersonCellInfo>
      <PersonCellArrow>
        <ArrowIcon></ArrowIcon>
      </PersonCellArrow>
    </PersonCellContent>
    <PersonCellBottomBorder></PersonCellBottomBorder>
  </StyledPersonCell>
);
