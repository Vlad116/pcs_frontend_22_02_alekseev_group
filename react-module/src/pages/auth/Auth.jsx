import React from "react";

import s from "./Auth.module.scss";
import AuthForm from "../../components/AuthForm";

function Auth() {
  return (
    <div className={s.root}>
      <AuthForm />
    </div>
  );
}

export default Auth;
