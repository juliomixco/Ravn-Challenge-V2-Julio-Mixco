import React from 'react';
import { PersonListContent } from './PersonList.style';
import { Person } from '../../interfaces/person.interface';
import { PersonItem } from '../personItem/PersonItem';
import { LoadingIndicator } from '../loadingIndicator/LoadingIndicator';
import { ErrorCell } from '../errorCell/ErrorCell';

interface PersonListProps {
  people: Person[];
  isLoading: boolean;
  hasError: boolean;
  onPersonSelected?: (person: Person) => void;
}

export const PersonList: React.SFC<PersonListProps> = ({
  people,
  isLoading,
  hasError,
  onPersonSelected,
}) => (
  <PersonListContent>
    {people.map((p, index) => (
      <PersonItem
        key={index}
        person={p}
        onClick={() => onPersonSelected?.(p)}></PersonItem>
    ))}

    {isLoading && <LoadingIndicator></LoadingIndicator>}

    {hasError && <ErrorCell></ErrorCell>}
  </PersonListContent>
);

PersonList.defaultProps = {
  onPersonSelected: (person) => {},
};
