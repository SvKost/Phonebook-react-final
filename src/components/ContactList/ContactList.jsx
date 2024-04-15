import { useSelector } from "react-redux";

import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactListContainer}>
      {filteredContacts.length !== 0 ? (
        <ul className={css.contactList}>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no contacts!</p>
      )}
    </div>
  );
};

export default ContactList;
