import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
// import { addContact } from 'redux/contactsSlice';
import { FormTitle } from './FormAddContact.styled';
import {
  StyledForm,
  FormContainer,
  Input,
  ErrMessage,
  Button,
} from './FormAddContact.styled';
import { useContacts } from 'redux/hooks';
import { ContactSchema } from './validation';
import { addContact } from 'redux/operations';

export const FormAddContact = () => {
  const dispatch = useDispatch();
  const contacts = useContacts();

  const handleSubmit = (values, actions) => {
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      toast.error(
        `Contact "${values.name.toUpperCase()}" is alredy in contacts`
      );
      return;
    }
    if (contacts.find(({ number }) => number === values.number)) {
      toast.error(
        `Contact with number"${values.number}" is alredy in contacts`
      );
      return;
    }

    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <FormTitle>Add contact</FormTitle>
        <FormContainer>
          <div>
            <label>
              Name
              <Input type="text" name="name" required />
              <ErrMessage name="name" component="p" />
            </label>
          </div>
          <div>
            <label>
              Phone number
              <Input
                type="tel"
                name="number"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <ErrMessage name="number" component="p" />
            </label>
          </div>
          <Button type="submit">Add contact</Button>
        </FormContainer>
      </StyledForm>
    </Formik>
  );
};
