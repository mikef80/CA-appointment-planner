import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const { appointments, contacts, addAppointments } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    const appointment = {
      title: title,
      contact: contact,
      date: date,
      time: time,
    };

    addAppointments(appointment);
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  const updateTitleHandler = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const updateContactHandler = (e) => {
    const contact = e.target.value;
    setContact(contact);
  };

  const updateDateHandler = (e) => {
    const date = e.target.value;
    setDate(date);
  };

  const updateTimeHandler = (e) => {
    const time = e.target.value;
    setTime(time);
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={updateTitleHandler}
          contacts={contacts}
          setContact={updateContactHandler}
          date={date}
          setDate={updateDateHandler}
          time={time}
          setTime={updateTimeHandler}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList array={appointments} />
      </section>
    </div>
  );
};
