import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useSelector } from "react-redux";

const Contacts = () => {
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const error = useSelector((state) => state.contacts.error);

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
