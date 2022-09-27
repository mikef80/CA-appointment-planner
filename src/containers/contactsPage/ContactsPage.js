import React, { useEffect, useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const { contacts, addContacts } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    const contact = { name: name, phone: phone, email: email };

    if (!duplicate) {
      addContacts(contact);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  const updateNameHandler = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const updatePhoneHandler = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const updateEmailHandler = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    contacts.some((contact) => {
      const contactName = contact.name;
      if (contactName.toLowerCase() === name.toLowerCase()) {
        setDuplicate(true);
      } else {
        setDuplicate(false);
      }
    });
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={updateNameHandler}
          phone={phone}
          setPhone={updatePhoneHandler}
          email={email}
          setEmail={updateEmailHandler}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={contacts} />
      </section>
    </div>
  );
};
