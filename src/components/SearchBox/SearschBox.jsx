import { useId } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectFilterName } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

import s from "./SearschBox.module.css";

const SearschBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterName);

  return (
    <>
      <form>
        <label htmlFor={id} className={s.form}>
          <span className={s.text}>Find contact by name</span>
          <input
            name="text"
            className={s.input}
            id={id}
            onChange={(event) => {
              dispatch(changeFilter(event.target.value));
            }}
            value={filter}
          />
        </label>
      </form>
    </>
  );
};

export default SearschBox;
