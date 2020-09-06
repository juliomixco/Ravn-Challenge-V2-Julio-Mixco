import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

export type UseRefReturnValue<T> = [
  T,
  MutableRefObject<T>,
  Dispatch<SetStateAction<T>>
];

export const useRefState = <T>(initialValue: T): UseRefReturnValue<T> => {
  const [state, setState] = useState<T>(initialValue);
  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);
  return [state, stateRef, setState];
};
