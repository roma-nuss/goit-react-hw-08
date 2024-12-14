import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={s.container}>
      <input
        type="text"
        value={filter}
        onChange={handleSearch}
        placeholder="Find contact by name..."
        className={s.input}
      />
    </div>
  );
};

export default SearchBox;
