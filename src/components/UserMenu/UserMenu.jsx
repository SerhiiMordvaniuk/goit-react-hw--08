import React from "react";

import s from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(logoutThunk()).unwrap().then(navigate("/"));
  };
  return (
    <div className={s.user}>
      <p className={s.name}>{user.name}</p>
      <button onClick={handleClick} className={s.btn}>
        <RiLogoutBoxRLine size="25" color="var(--primary-color)" />
      </button>
    </div>
  );
};

export default UserMenu;
