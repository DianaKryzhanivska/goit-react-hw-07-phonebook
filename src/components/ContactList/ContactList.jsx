import React from 'react';
// import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoadind,
} from 'redux/contactForm/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactForm/contactsSlice';

export const ContactList = () => {
  const loading = useSelector(selectIsLoadind);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  // console.log(contacts);
  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
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

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
