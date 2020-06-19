import React from "react";
import ContactListItem from "./../contactForm/contactListItem/ContactListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import transition from "../../transition/transition.module.css";

const ContactList = ({ contacts, deleteContact }) => (
  <>
    <TransitionGroup component="ul">
      {contacts.map(contact => (
        <CSSTransition timeout={1500} classNames={transition} unmountOnExit>
          <ContactListItem
            contact={contact}
            key={contact.id}
            deleteContact={deleteContact}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

export default ContactList;
