import React from "react";
import styles from "../ContactForm.module.css";

const ContactListItem = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <li className={styles.contactCard}>
      <span>{name}: </span>
      <span>{number}</span>
      <button
        className={styles.contactButt}
        type="button"
        id={id}
        onClick={deleteContact}
      >
        X
      </button>
    </li>
  );
};
export default ContactListItem;
