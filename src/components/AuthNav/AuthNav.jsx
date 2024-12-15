import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => (
  <div className={s.navbarWrapper}>
    <NavLink to="/register" className={s.link}>
      Register
    </NavLink>
    <NavLink to="/login" className={s.link}>
      Login
    </NavLink>
  </div>
);

export default AuthNav;
