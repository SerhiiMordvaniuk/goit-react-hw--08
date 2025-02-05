import React from "react";

import { Link } from "react-router-dom";

import s from "./Home.module.css";

const Home = () => {
  return (
    <div className="container">
      <div className={s.hero}>
        <div className={s.info}>
          <h1 className={s.title}>Better app for your contacts</h1>
          <p className={s.text}>Save. Edit. Delete. </p>
          <Link to="/contacts" className={s.link}>
            Go to contacts
          </Link>
        </div>

        <img src="/phone.png" alt="phone" />
      </div>
    </div>
  );
};

export default Home;
