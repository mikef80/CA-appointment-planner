import React from "react";

export const ContactPicker = (props) => {
  const { contacts, setContact } = props;
  
  return (
    <div>
      <select onChange={setContact}>
        <option key="0" value="" default></option>
        {contacts.map((contact, index) => {
          return <option key={index + 1}>{contact.name}</option>;
        })}
      </select>
    </div>
  );
};
