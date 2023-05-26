import { Toaster } from 'react-hot-toast';
import { GlobalStyles } from './GlobalStyle';
import { Global } from '@emotion/react';
import { Layout } from './Layout/Layout';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { Title } from './Title/Title';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Grid } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Layout>
        <h1>Phonebook</h1>
        <FormAddContact />
        <Title title="Contacts" />
        <Filter />
        {isLoading && !error && (
          <Grid
            height="40"
            width="40"
            color="rgba(178, 182, 181, 0.904)"
            ariaLabel="grid-loading"
            radius="8"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
        <ContactList />
      </Layout>
      <Toaster position="top-right" reverseOrder={false} />
      <Global styles={GlobalStyles} />
    </main>
  );
};
