import "./App.css";

import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact } from "../redux/actions";

export default function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onAdd={(newContact) => dispatch(addContact(newContact))} />
      <SearchBox value={filter} />
      <ContactList
        contacts={visibleContacts}
        onDelete={(id) => dispatch(deleteContact(id))}
      />
    </div>
  );
}
