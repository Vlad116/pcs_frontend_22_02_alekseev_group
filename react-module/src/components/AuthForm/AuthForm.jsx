import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login, register } from "../../features/user/user";

import s from "./AuthForm.module.scss";

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formType, setFormType] = useState("login");
  const [isChecked, setIsChecked] = useState(false);
  const [formPayload, setFormPayload] = useState({
    login: "",
    password: "",
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

  const switchFormTypeHandler = () =>
    setFormType(isLoginForm ? "register" : "login");

  const checkboxHandler = () => setIsChecked(!isChecked);

  const loginInputHandler = (event) =>
    setFormPayload({ ...formPayload, login: event.target.value });

  const pwdInputHandler = (event) =>
    setFormPayload({ ...formPayload, password: event.target.value });

  const loginHandler = () => {
    dispatch(login(formPayload));
    navigate("/");
  };

  const registrationHandler = () => {
    console.log(formPayload);
    dispatch(register(formPayload));
    navigate("/");
  };

  const onBtnClick = (e) => {
    e.preventDefault();
    isLoginForm ? loginHandler() : registrationHandler();
  };

  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const handleAddToBasketClick = () => {
  //   dispatch(
  //     add({
  //       id,
  //       name,
  //       description,
  //       img,
  //       price,
  //       weight,
  //     })
  //   );
  //   dispatch(increase(price));
  // };

  // const handleRedirectToProductPage = () => navigate(`/product/${id}`);

  return (
    <form className={s.root}>
      <div
        className={s.root__form_type_switcher}
        onClick={switchFormTypeHandler}
      >
        {switcherText}
      </div>
      <h2 className={s.root__title}>{formTitle}</h2>
      <input
        type="text"
        className={s.root__input}
        placeholder={"Логин"}
        onChange={loginInputHandler}
      />
      <input
        type="password"
        className={s.root__input}
        placeholder={"Пароль"}
        onChange={pwdInputHandler}
      />
      <div className={s.root__checkbox_wrapper}>
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={checkboxHandler}
          className={s.root__checkbox}
        />
        <label htmlFor="checkbox">
          Я согласен получать обновления на почту
        </label>
      </div>
      <button className={s.root__submit_btn} type="button" onClick={onBtnClick}>
        {btnText}
      </button>
    </form>
  );
};

export default AuthForm;
