import { Outlet, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import s from "./Layout.module.css";

const Layout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={s.container}>
      <header>
        <nav className={s.navbar}>
          <div className={s.navbarWrapper}>
            <NavLink to="/">Home</NavLink>
            {isLoggedIn ? (
              <>
                <NavLink to="/contacts">Contacts</NavLink>
                <span className={s.hello}>Hello, {user.name}!</span>
                <button type="button" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
              </>
            )}
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
