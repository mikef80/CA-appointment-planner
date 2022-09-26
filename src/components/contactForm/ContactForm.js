import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <input type="tel" pattern="[0-9]{11}"/>
      <input type="email" />
      <button type="submit">Submit</button>
    </form>
  );
};
