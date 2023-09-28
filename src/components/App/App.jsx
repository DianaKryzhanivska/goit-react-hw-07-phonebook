import React from 'react';
import { Container, SubTitle, MainTitle, Info } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contactForm/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>

      <ContactForm />

      <SubTitle>Contacts</SubTitle>
      {contacts?.length > 0 ? (
        <Filter />
      ) : (
        <Info>There are no contacts in your phonebook.</Info>
      )}

      <ContactList />
    </Container>
  );
};
