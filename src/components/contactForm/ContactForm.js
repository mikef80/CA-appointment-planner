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
      <input
        type='text'
        value={name}
        onChange={setName}
        placeholder='Enter name'
      />
      <input
        type='tel'
        pattern='[0][0-9]{10}'
        value={phone}
        onChange={setPhone}
        placeholder='Enter telephone number'
      />
      <input
        type='email'
        value={email}
        onChange={setEmail}
        placeholder='Enter email address'
      />
      <button type='submit'>Submit</button>
    </form>
  );
};
