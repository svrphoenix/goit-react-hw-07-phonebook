import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { List, Contact, Button } from './ContactList.styled';
import { useVisibleContacts } from 'redux/hooks';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useVisibleContacts();

  return (
    <List>
      {visibleContacts &&
        visibleContacts.map(({ id, name, number }) => (
          <Contact key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </Contact>
        ))}
    </List>
  );
};
