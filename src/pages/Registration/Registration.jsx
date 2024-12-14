import Form from "../../components/Form/Form";
import s from "./Registration.module.css";

const Registration = () => {
  return (
    <div className={s.registrationPage}>
      <h2 className={s.title}>Registration Form</h2>
      <Form />
    </div>
  );
};

export default Registration;
