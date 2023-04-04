import React from "react";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <UsersContainer />
      <MessagesContainer />
    </div>
  )
};

export default Dialogs;