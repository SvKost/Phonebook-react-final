import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

import { selectIsLoading } from "../../redux/auth/selectors";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  // useEffect(() => {
  //   dispatch(); // TODO: change api request function
  // }, [dispatch]);

  return (
    <div>
      {/* <Helmet> */}
      <title>ContactsPage</title>
      {/* </Helmet> */}
      <ContactForm />
      <SearchBox />
      <ContactList />
      <div>{isLoading && "Request in progress..."}</div>
    </div>
  );
};

export default ContactsPage;