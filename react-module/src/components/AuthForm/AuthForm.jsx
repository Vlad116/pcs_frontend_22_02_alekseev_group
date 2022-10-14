import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

import { login, register, errorReset } from "../../features/user/user";

import s from "./AuthForm.module.scss";

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formError = useSelector((state) => state.user.error);

  const [formType, setFormType] = useState("login");
  const [isChecked, setIsChecked] = useState(false);
  const [formPayload, setFormPayload] = useState({
    login: "",
    loginError: "",
    password: "",
    passwordError: "",
  });

  const isLoginForm = formType === "login";

  const formTitle = useMemo(
    () => (isLoginForm ? "вход" : "регистрация"),
    [isLoginForm]
  );

  const btnText = useMemo(
    () => (isLoginForm ? "Войти" : "Зарегистрироваться"),
    [isLoginForm]
  );

  const switcherText = useMemo(
    () => (isLoginForm ? "Зарегистрироваться" : "Авторизоваться"),
    [isLoginForm]
  );

  const switchFormTypeHandler = () => {
    dispatch(errorReset);
    setFormType(isLoginForm ? "register" : "login");
  };

  const checkboxHandler = () => setIsChecked(!isChecked);

  const loginInputHandler = (event) => {
    const inputText = event.target.value;
    let error = "";

    if (inputText === "") {
      error = "Поле не должно быть пустым";
    } else if (inputText.length < 4) {
      error = "Логин должен содержать не менее 4-х символов";
    }

    setFormPayload({ ...formPayload, loginError: error, login: inputText });
  };

  const pwdInputHandler = (event) => {
    const inputText = event.target.value;
    let error = "";

    if (inputText === "") {
      console.log(error);
      error = "Поле не должно быть пустым";
    } else if (inputText.length < 4) {
      console.log(error);
      error = "Пароль должен содержать не менее 4-х символов";
    }

    setFormPayload({
      ...formPayload,
      passwordError: error,
      password: inputText,
    });
  };

  const loginHandler = () => {
    dispatch(login(formPayload));
    console.log(formError);
    navigate("/");
  };

  const registrationHandler = () => {
    dispatch(register(formPayload));
    console.log(formError);
    navigate("/");
  };

  const onBtnClick = (e) => {
    e.preventDefault();
    isLoginForm ? loginHandler() : registrationHandler();
  };

  return (
    <form className={s.root}>
      <div
        className={s.root__form_type_switcher}
        onClick={switchFormTypeHandler}
      >
        {switcherText}
      </div>
      <h2 className={s.root__title}>{formTitle}</h2>
      <div
        className={cn(s.root__input_wrapper, {
          [s.error]: formPayload.loginError,
        })}
      >
        <input
          type="text"
          className={s.root__input}
          placeholder={"Логин"}
          onChange={loginInputHandler}
        />
        {formPayload.loginError && (
          <p className={s.root__input_error}>{formPayload.loginError}</p>
        )}
      </div>
      <div
        className={cn(s.root__input_wrapper, {
          [s.error]: formPayload.passwordError,
        })}
      >
        <input
          type="password"
          className={s.root__input}
          placeholder={"Пароль"}
          onChange={pwdInputHandler}
        />
        {formPayload.passwordError && (
          <p className={s.root__input_error}>{formPayload.passwordError}</p>
        )}
      </div>
      <div
        className={cn(s.root__checkbox_wrapper, {
          [s.error]: formError,
        })}
      >
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={checkboxHandler}
          className={cn(s.root__checkbox, {
            [s.checked]: isChecked,
          })}
        />
        <label htmlFor="checkbox">
          Я согласен получать обновления на почту
        </label>
      </div>
      {formError && <div className={s.root__form_error}>{formError}</div>}
      <button className={s.root__submit_btn} type="button" onClick={onBtnClick}>
        {btnText}
      </button>
    </form>
  );
};

export default AuthForm;
