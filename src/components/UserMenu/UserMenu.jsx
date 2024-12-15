import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <span className={s.hello}>Hello, {user.name}!</span>
      <button type="button" onClick={handleLogout} className={s.button}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
