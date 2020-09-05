import React from 'react';
import { PersonCell } from '../personCell/PersonCell';
import { Person } from '../../interfaces/person.interface';
import { LoadingIndicator } from '../loadingIndicator/LoadingIndicator';
import { ErrorCell } from '../errorCell/ErrorCell';

export interface PersonListProps {
  people: Person[];
  selectPerson?: (person: Person) => void;
  isLoading?: boolean;
}

export const Personlist: React.SFC<PersonListProps> = (props) => (
  <div className="people-list">
    {props.people?.map((person) => (
      <PersonCell
        person={person}
        onClick={() => props.selectPerson?.(person)}></PersonCell>
    ))}
    <LoadingIndicator></LoadingIndicator>
    <ErrorCell></ErrorCell>
  </div>
);

Personlist.defaultProps = {
  selectPerson: () => {},
  isLoading: false,
};
