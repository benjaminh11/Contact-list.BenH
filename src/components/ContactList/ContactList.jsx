import React, { useEffect, useState } from "react";
import ContactRow from "../ContactRow/ContactRow";
import axios from "axios";

function ContactList({ setFeaturedUser }) {
  console.log(setFeaturedUser);
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    axios("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
      .then((data) => {
        {
          console.log(data.data);
          setContacts(data.data);
        }
      })
      .catch((err) => console.err(err));
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Cotact List</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactRow
            key={contact.id}
            contact={contact}
            setFeaturedUser={setFeaturedUser}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ContactList;

/**
 * 1. Get the selected users id
 * - get id by clicking the user
 * - store the id somewhere(state variable?)
 * - we will conditionally render the user
 * -- if the featUserId is a non-sero number, it is truth, use that to show the single user details
 * -- else, should be set to null to show list
 * 2 show the user that was selected (list of users should be hidden)
 * - we will use that id to fetch the details for the user
 * - to fecth individual user, we will use the same approach as the list but with a different endpoint
 * 3 click a back button to show list of users again (selected user should be hidden or set to null)
 * - when we click this button from the single users detail page, we should set featUserId to null
 *
 *
 *
 */
