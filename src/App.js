import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([
    { name: "Mike", phone: 12345678901, email: "mike@mike-francis.org" },
  ]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addAppointments = (title, contact, date, time) => {
    const appointment = {
      title: title,
      contact: contact,
      date: date,
      time: time,
    };

    setAppointments((prev) => [...prev, appointment]);
  };

  const addContacts = ({name, phone, email}) => {
    const contact = {
      name: name,
      phone: phone,
      email: email,
    };
    setContacts((prev) => [...prev, contact]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName='active'>
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName='active'>
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path='/'>
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContacts={addContacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              addAppointments={addAppointments}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
