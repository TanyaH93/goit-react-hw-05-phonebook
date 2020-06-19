import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitContact({
      name: this.state.name,
      number: this.state.number,
      id: uuidv4()
    });
    this.setState({
      name: "",
      number: ""
    });
  };

  handleChange = e => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <h2>Name</h2>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <h2>Number</h2>
          <input
            className={styles.input}
            type="tel"
            pattern="(\+?\d[- .]*){7,13}"
            name="number"
            placeholder="Enter Number"
            onChange={this.handleChange}
            value={this.state.number}
          />
          <button className={styles.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
