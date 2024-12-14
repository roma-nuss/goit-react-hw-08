import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d+$/, "Number must contain only digits")
    .min(3, "Number must be at least 3 characters")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <h1 className={s.add}>Add contact</h1>
        <div className={s.field}>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Name" />
          <ErrorMessage className={s.error} name="name" component="span" />
        </div>
        <div className={s.field}>
          <label htmlFor="number">Number</label>
          <Field id="number" name="number" placeholder="Number" />
          <ErrorMessage className={s.error} name="number" component="span" />
        </div>
        <button className={s.button} type="submit">
          Add
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
