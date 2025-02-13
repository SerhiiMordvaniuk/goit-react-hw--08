import React from "react";

import { Field, Form, Formik } from "formik";

import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";

import { Link } from "react-router-dom";

import s from "./LoginForm.module.css";

const LoginForm = () => {
  const initialValues = {
    password: "",
    email: "",
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    options.resetForm();
  };
  return (
    <div className="container">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span className={s.span}>E-mail</span>
            <Field name="email" className={s.input} />
          </label>
          <label className={s.label}>
            <span className={s.span}>Password</span>
            <Field type="password" name="password" className={s.input} />
          </label>
          <button type="submit" className={s.button}>
            Login
          </button>
          <p className={s.text}>
            New to Todos?
            <Link to="/register">
              <span className={s.link}> Register now</span>
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
