import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

import { Input } from './Filter.styled';
import { useContacts, useFilter } from 'redux/hooks';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useFilter();
  const isInputDisabled = useContacts().length ? false : true;

  return (
    <label>
      Find contact by name:
      <Input
        type="text"
        value={filter}
        disabled={isInputDisabled}
        onChange={({ currentTarget: { value } }) => {
          dispatch(filterContacts(value));
        }}
      />
    </label>
  );
};
