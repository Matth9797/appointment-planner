import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useState } from 'react';
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (name, phone, email) => {
    setContacts(prev => [...prev, {name, phone, email}]);
  };
  const addAppointments = (title, contact, date, time) => {
    setAppointments(prev => [...prev, {title, contact, date, time}]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage 
            addContacts={addContact}
            contacts={contacts}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage 
            contacts={contacts}
            addAppointments={addAppointments}
            appointments={appointments}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
