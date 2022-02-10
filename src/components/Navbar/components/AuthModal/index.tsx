import React, { FC, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { IoCloseSharp } from "react-icons/io5";

import cl from "./styles.module.scss";
import IAuthModal from "./type";
import validationSchema from "./validation.schema";
import { userLogin, userSignUp } from "../../../../store/actions/auth";
import { ERROR_MESSAGES } from "../../../../utils/constants";
import { IErrorMessages } from "../../../../types/common";

import { Button, Modal, Input } from "../../..";

const AuthModal: FC<IAuthModal> = ({ isActive, closeAction }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [typeOfForm, setTypeOfForm] = useState("signin");
  const [error, setError] = useState("");

  const setTypeOfFormHandler = () => {
    setTypeOfForm((prevState) =>
      prevState === "signin" ? "signup" : "signin"
    );
    formik.resetForm();
  };
  const closeFormHandler = () => {
    formik.resetForm();
    closeAction();
  };

  const [label, footerMessage, footerLink] = useMemo(
    () =>
      typeOfForm === "signin"
        ? [t("Sign In"), t("Don't have an accout?"), t("Sign Up")]
        : [t("Sign Up"), t("Already have an account?"), t("Sign In")],
    [typeOfForm, t]
  );

  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      email: "",
      password: "",
    },
    initialErrors: {
      email: "",
      password: "",
    },
    validationSchema,

    onSubmit: async (credentials) => {
      try {
        await dispatch(
          (typeOfForm === "signin" ? userLogin : userSignUp)(credentials)
        );
      } catch (error: unknown) {
        if (typeof error === "string") {
          const message = t((ERROR_MESSAGES as IErrorMessages)[error]);
          setError(message);
        }
      }
    },
  });

  useEffect(() => {
    setError("");
  }, [formik.values]);

  return (
    <Modal isActive={isActive} mix={cl.modal}>
      <h1 className={cl.title}>{label}</h1>
      <IoCloseSharp className={cl.closeBtn} onClick={closeFormHandler} />
      <form className={cl.form} onSubmit={formik.handleSubmit}>
        <Input
          id="email"
          placeholder={t("Email")}
          value={formik.values["email"]}
          invalidMessage={formik.errors["email"]}
          onChange={formik.handleChange}
        />
        <Input
          id="password"
          type="password"
          placeholder={t("Password")}
          value={formik.values["password"]}
          invalidMessage={formik.errors["password"]}
          onChange={formik.handleChange}
        />

        <div className={cl.errorMessage}>{error}</div>

        <div className={cl.btnContainer}>
          <Button label={label} type="submit" />
          <span className={cl.linkCont}>
            <div>{footerMessage}</div>
            <div onClick={setTypeOfFormHandler}>{footerLink}</div>
          </span>
        </div>
      </form>
    </Modal>
  );
};

export default AuthModal;
