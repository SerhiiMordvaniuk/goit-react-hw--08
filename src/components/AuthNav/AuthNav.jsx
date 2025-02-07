import React from "react";

import { Link } from "react-router-dom";

import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={s.auth}>
      <Link to="/login" className={s.link}>
        Login
      </Link>
      <Link to="/register" className={s.link}>
        Register
      </Link>
    </div>
  );
};

export default AuthNav;
