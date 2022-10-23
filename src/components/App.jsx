import { useState } from "react";
import { nanoid } from "nanoid";
import { ContactList } from './ContactList/ContactList'
import { Filter } from './Filter/Filter'
import { ContactForm } from "./ContactForm/ContactForm";
import initialContacts from './contacts.json'
import { Wrapper } from './App.styled'

export function App () {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  function handleChange (e) {
    setFilter(e.target.value);
  }

  function handleSubmit(data) {
    const contactName = contacts.find(
      contact => contact.name === data.name.trim()
    )
    if (!contactName){
      setContacts(contacts => [{id: nanoid(5), ...data}, ...contacts]);
    } else {
      return alert(`${contactName.name} is already in contacts.`);
    }
  }

  function handleDelete (id) {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  function getFilteredContacts () {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  }

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit}/>
      <h2>Contacts</h2>
      {contacts == 0 && 
      <p>Contacts are empty</p>
      }
      {contacts.length > 0 && 
      <>
        <Filter value={filter} onChange={handleChange}/>
        <ContactList filtered={getFilteredContacts()} onDelete={handleDelete}/>
      </>
      }
    </Wrapper>
  )
};
