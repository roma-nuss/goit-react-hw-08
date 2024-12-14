import { FaUser } from "react-icons/fa";
import { PiPhoneFill } from "react-icons/pi";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
    setIsModalOpen(false);
  };

  const openDeleteModal = () => {
    setContactToDelete(contact);
    setIsModalOpen(true);
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.userBox}>
          <FaUser className={s.icon} />
          <span className={s.userName}>{contact.name}</span>
        </div>
        <div className={s.phoneBox}>
          <PiPhoneFill className={s.icon} />
          <span>{contact.number}</span>
        </div>
      </div>
      <button className={s.button} onClick={openDeleteModal}>
        Delete
      </button>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={() => handleDelete(contactToDelete.id)}
          message={`Are you sure you want to delete ${contactToDelete?.name}?`}
        />
      )}
    </div>
  );
};

export default Contact;
