import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="contacts-page">
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">Error: {error}</p>}
      <ContactList />
    </div>
  );
};

export default Contacts;
