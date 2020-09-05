import React from 'react';
import { PersonListContent } from './PersonList.style';
import { Person } from '../../interfaces/person.interface';
import { PersonItem } from '../personItem/PersonItem';
import { LoadingIndicator } from '../loadingIndicator/LoadingIndicator';
import { ErrorCell } from '../errorCell/ErrorCell';

interface PersonListProps {
  people: Person[];
  onPersonSelected?: (person: Person) => void;
}

export const PersonList: React.SFC<PersonListProps> = ({
  people,
  onPersonSelected,
}) => (
  <PersonListContent>
    {people.map((p, index) => (
      <PersonItem
        key={index}
        person={p}
        onClick={() => onPersonSelected?.(p)}></PersonItem>
    ))}
    <LoadingIndicator></LoadingIndicator>
    <ErrorCell></ErrorCell>
  </PersonListContent>
);

PersonList.defaultProps = {
  onPersonSelected: (person) => {},
};
