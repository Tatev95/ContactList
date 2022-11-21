import React, { Component, PureComponent } from "react";

import ContactForm from "./components/ContatctForm/ContactForm"
import ContactsList from "./components/ContactList";
import Filter from "./components/Filter/Filter";
import { ThemeProvider } from './components/ThemContext';
import Modal from "./Modal";
import Login from './components/Login'


import './App.css';

const ThemeContext = React.createContext('light');


class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      filter: '',
      isModalOpened: false,
      contactEmpty: 'empty contact form'
    }
  }





  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      document.body.style.backgroundColor = 'lightgray'
      alert('Thank you')

      console.log("cdu")
    }
  }


   handleAddContact = (newContact) => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact]
    }))

  }

  onCheckUnique = (name,) => {
    const { contacts } = this.state;

    const isExistContact = !!contacts.find((contact) => (contact.name === name));
    isExistContact && alert("Contact is already exist");

    return !isExistContact
  }

  handleRemoveContact = (id) => {
    return this.setState(({ contacts }) => ({ contacts: contacts.filter((contact) => contact.id !== id) }))
  }



  handleFilterChange = (filter) => this.setState({ filter });

  getContacts = () => {
    const { contacts, filter } = this.state;
    // keep in state 
    return contacts.filter(contact => {
      return Object.keys(contact).some(key => {
        return contact[key].toString().toLowerCase().includes(filter)
      })
    });
  }

  resetForm = () => {
    return this.setState({
      contacts: []
    })
  }

  openModal = () => {
    const { isModalOpened } = this.state;

    this.setState({ isModalOpened: !isModalOpened })
    console.log('isModalOpened', isModalOpened)

  }

  render() {
    const { filter, contacts, isModalOpened, contactEmpty } = this.state;
    const getContacts = this.getContacts()

    return (
      <div className="main">
        <div className="form">
          <ThemeProvider value="gray">
            <ContactForm onAdd={this.handleAddContact} onCheckUnique={this.onCheckUnique} contacts={contacts} />
          </ThemeProvider>

        </div>

        <div className="list">
          <h2>Contact List</h2>
          <Filter filter={filter} onChange={this.handleFilterChange} />
          <button className="remove" onClick={this.resetForm}>Remove all</button>
          <ContactsList contacts={getContacts} onRemove={this.handleRemoveContact} />

          {contacts.length ? <Login contacts={contacts} /> : contactEmpty}



        </div>
        <button onClick={this.openModal} className='open'>Open Modal</button>
        <div>
          <Modal isOppened={isModalOpened} onClose={() => { this.setState({ isModalOpened: false }) }}>
            <h2>Contact with Us</h2>
            <form>
              <input type='text' placeholder='enter  your name' />
              <input type='text' placeholder='enter email address' />
            </form>
          </Modal>

        </div>


      </div>
    )
  }
}

export default App;
