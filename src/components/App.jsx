import { Toaster } from 'react-hot-toast';
import { GlobalStyles } from './GlobalStyle';
import { Global } from '@emotion/react';
import { Layout } from './Layout/Layout';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { Title } from './Title/Title';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <main>
      <Layout>
        <h1>Phonebook</h1>
        <FormAddContact />
        <Title title="Contacts" />
        <Filter />
        <ContactList />
      </Layout>
      <Toaster position="top-right" reverseOrder={false} />
      <Global styles={GlobalStyles} />
    </main>
  );
};
