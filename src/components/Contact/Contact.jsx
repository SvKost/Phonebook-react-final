import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";

import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDeleteContact = (contactId) => dispatch(deleteContact(contactId));

  return (
    <div className={css.contactsContainer}>
      <div className={css.contactItem}>
        <div className={css.contactInfo}>
          <p>
            <FaUser className={css.contactIcon} />
            {name}
          </p>
          <p>
            <FaPhone className={css.contactIcon} />
            {number}
          </p>
        </div>
        <button
          className={css.contactBtn}
          onClick={() => handleDeleteContact(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
