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
        visibleContacts.map(item => (
          <Contact key={item.id}>
            <p>{item.name}</p>
            <p>{item.number}</p>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(item.id))}
            >
              Delete
            </Button>
          </Contact>
        ))}
    </List>
  );
};
