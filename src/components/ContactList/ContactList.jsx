import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  return (
    <>
      {isLoading && <p className={s.loadingMessage}>Loading contacts...</p>}
      {error && (
        <p className={s.errorMessage}>Error loading contacts: {error}</p>
      )}
      <ul className={s.list}>
        {filteredContacts && filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <li key={contact.id} className={s.contact}>
              <Contact contact={contact} />
            </li>
          ))
        ) : (
          <p className={s.message}>Contacts not found</p>
        )}
      </ul>
    </>
  );
};

export default ContactList;
