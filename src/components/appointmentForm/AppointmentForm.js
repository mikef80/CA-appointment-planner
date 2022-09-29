import React from "react";
import ContactPicker from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        onChange={setTitle}
        placeholder='Enter title'
      />
      <input
        type='date'
        value={date}
        onChange={setDate}
        min={getTodayString()}
      />
      <input type='time' value={time} onChange={setTime} />
      <ContactPicker contact={contacts} />
      <button type='submit'>Submit</button>
    </form>
  );
};
