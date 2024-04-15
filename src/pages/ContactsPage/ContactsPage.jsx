import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

import { selectIsLoading } from "../../redux/auth/selectors";
import { useEffect } from "react";
import { fetchContacts, addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (formData) => {
    dispatch(addContact(formData));
  };

  return (
    <div>
      <title>ContactsPage</title>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox />
      {contacts && <ContactList />}
      <div>{isLoading && "Request in progress..."}</div>
    </div>
  );
};

export default ContactsPage;
