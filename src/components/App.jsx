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
      data.id = nanoid(5);
      setContacts(contacts => [data, ...contacts]);
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
      <Filter value={filter} onChange={handleChange}/>
      <ContactList filtered={getFilteredContacts()} onDelete={handleDelete}/>
    </Wrapper>
  )
};

// export class oldApp extends Component {
//   state = {
//     contacts: initialContacts,
//     filter: ''
//   }

//   handleChange = e => {
//     this.setState({filter: e.target.value});
//   }

//   handleSubmit = data => {
//     const {contacts} = this.state;
//     const contactName = contacts.find(
//       contact => contact.name === data.name.trim()
//     )
//     if (!contactName){
//       this.setState(prevState =>({
//         contacts: [data, ...prevState.contacts],
//       }))
//     } else {
//       return alert(`${contactName.name} is already in contacts.`)
//     }
//   }

//   handleDelete = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id)
//     }))
//   }

//   getFilteredContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     )
//   }
  
//   render(){
//     return (
//       <Wrapper>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.handleSubmit}/>
//         <h2>Contacts</h2>
//         <Filter value={this.filter} onChange={this.handleChange}/>
//         <ContactList filtered={this.getFilteredContacts()} onDelete={this.handleDelete}/>
//       </Wrapper>
//   )}
// };
