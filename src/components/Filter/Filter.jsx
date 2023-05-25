import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

import { Input } from './Filter.styled';
import { getContacts, getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const isInputDisabled = useSelector(getContacts).length ? false : true;

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
