import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import s from "./Entry.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, handleChange, handleBlur, isSubmitting }) => (
        <Form className={s.form}>
          <div className={s.wrapper}>
            <MdEmail className={s.icon} />
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${s.input} ${
                touched.email && errors.email ? s.errorInput : ""
              }`}
            />
          </div>
          {touched.email && errors.email && (
            <div className={s.errorText}>{errors.email}</div>
          )}

          <div className={s.wrapper}>
            <RiLockPasswordLine className={s.icon} />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${s.input} ${
                touched.password && errors.password ? s.errorInput : ""
              }`}
            />
          </div>
          {touched.password && errors.password && (
            <div className={s.errorText}>{errors.password}</div>
          )}

          <button type="submit" className={s.button} disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
