import { useEffect, useState } from "react";
import api from "../services/api";
import ContactItem from "./ContactItem";

const ContactList = ({ refresh, onRefresh }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api.get("/contacts").then(res => setContacts(res.data));
  }, [refresh]);

  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact._id}
          contact={contact}
          onDelete={onRefresh}
        />
      ))}
    </ul>
  );
};

export default ContactList;
