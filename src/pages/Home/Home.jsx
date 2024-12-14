import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.homePage}>
      <div className={s.flex}>
        <h1 className={s.title}>Phonebook</h1>
        <a href="/register" className={s.home}>
          Registration 🔥
        </a>
      </div>
    </div>
  );
};

export default Home;
