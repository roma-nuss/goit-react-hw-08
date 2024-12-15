import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { GoPersonFill } from "react-icons/go";
import { PiLockKeyFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, touched, errors, handleChange, handleBlur }) => (
        <Form className={s.form}>
          <div className={s.wrapper}>
            <GoPersonFill className={s.icon} />
            <Field
              type="text"
              name="name"
              className={`${s.input} ${
                touched.name && errors.name ? s.errorInput : ""
              }`}
              placeholder="Enter your name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.name && errors.name && (
            <div className={s.errorText}>{errors.name}</div>
          )}

          <div className={s.wrapper}>
            <MdEmail className={s.icon} />
            <Field
              type="email"
              name="email"
              className={`${s.input} ${
                touched.email && errors.email ? s.errorInput : ""
              }`}
              placeholder="Enter your email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.email && errors.email && (
            <div className={s.errorText}>{errors.email}</div>
          )}

          <div className={s.wrapper}>
            <PiLockKeyFill className={s.icon} />
            <Field
              type="password"
              name="password"
              className={`${s.input} ${
                touched.password && errors.password ? s.errorInput : ""
              }`}
              placeholder="Enter your password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.password && errors.password && (
            <div className={s.errorText}>{errors.password}</div>
          )}

          <button type="submit" className={s.button} disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
