import React from "react";
import { Link } from "react-router-dom";

import s from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className={s.notfound}>
        <p className={s.txt}>Page not found...</p>
        <Link to="/" className={s.home}>
          Go to Home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
