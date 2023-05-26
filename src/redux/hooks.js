import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  selectVisibleContacts,
} from './selectors';

const useVisibleContacts = () => {
  return useSelector(selectVisibleContacts);
};

const useContacts = () => {
  return useSelector(selectContacts);
};

const useFilter = () => {
  return useSelector(selectFilter);
};

export { useVisibleContacts, useContacts, useFilter };
