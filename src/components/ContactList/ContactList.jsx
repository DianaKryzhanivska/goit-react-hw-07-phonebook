import React, { useEffect } from 'react';
import { List, Item, Button } from './ContactList.styled';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/contactForm/selectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactThunk,
  fetchContacts,
} from 'redux/contactForm/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <List>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {filteredContacts?.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <Button
              type="button"
              name="delete"
              onClick={() => handleDeleteContact(contact.id)}
            >
              delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};
