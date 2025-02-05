import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

import Contact from "../Contact/Contact";
import Loader from "../Loader/Loader";

import s from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactList = useSelector(selectFilteredContacts);

  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  return (
    <>
      {loading && <Loader />}
      {error && <p>Something went wrong....</p>}
      {
        <ul className={s.list}>
          {contactList.map((item) => {
            return (
              <li key={item.id}>
                <Contact id={item.id} name={item.name} number={item.number} />
              </li>
            );
          })}
        </ul>
      }
    </>
  );
};

export default ContactList;
