import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import s from "./Registration.module.css";

const Registration = () => {
  return (
    <div className={s.registrationPage}>
      <h2 className={s.title}>Registration Form</h2>
      <RegistrationForm />
    </div>
  );
};

export default Registration;
