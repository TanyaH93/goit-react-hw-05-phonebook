import React, { Component } from "react";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";
import { CSSTransition } from "react-transition-group";
import styles from "./App.module.css";
// import transition from "./transition/transition.module.css";
import phonebook from "./transition/phonebook.module.css";

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      // { id: "id-5", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-6", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-7", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-8", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: "",
    inUp: false
  };

  componentDidMount() {
    const contacts =
      localStorage.getItem("contacts") !== null
        ? JSON.parse(localStorage.getItem("contacts"))
        : [];
    console.log(contacts);
    this.setState({ contacts, inUp: true });
  }
  componentDidUpdate() {
    // if()
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  submitContact = data => {
    console.log("data", { data });
    this.setState(prevstate => ({
      contacts: [...prevstate.contacts, data]
    }));
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prevstate => ({
      contacts: prevstate.contacts.filter(contact => contact.id !== id)
    }));
  };

  getName = e => {
    this.setState({
      filter: e.target.value
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(this.state.filter)
    );
  };

  render() {
    // const { contacts } = this.state;
    // const inUp = true;
    return (
      <div className={styles.container}>
        <CSSTransition
          in={this.state.inUp}
          timeout={1500}
          classNames={phonebook}
        >
          <h2 className={styles.logo}>Phonebook</h2>
        </CSSTransition>

        <ContactForm submitContact={this.submitContact} />
        <h2>Contacts</h2>
        <Filter getName={this.getName} />
        <ContactList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
