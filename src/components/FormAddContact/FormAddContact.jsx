import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addContact } from 'redux/contactsSlice';
import { FormTitle } from './FormAddContact.styled';
import {
  StyledForm,
  FormContainer,
  Input,
  ErrMessage,
  Button,
} from './FormAddContact.styled';
import { getContacts } from 'redux/selectors';

const numberPattern =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Required field!'),
  number: Yup.string()
    .matches(numberPattern, 'Phone number is not valid')
    .required('Required field!'),
});

export const FormAddContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

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
              <Input
                type="text"
                name="name"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
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
