import { FC } from "react";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import cl from "./styles.module.scss";
import validationSchema from "./validation.schema";
import { userUpdateProfile } from "../../../../store/actions/auth";
import { useAppSelector } from "../../../../store";

import ProfileBlock from "../ProfileBlock";
import { Button, Input } from "../../../../components";

const ProfileUserdata: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { displayName, email, photoURL } = useAppSelector(
    (state) => state.auth.userData
  );
  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      displayName: displayName || email,
      photoURL: photoURL || "",
      password: "",
    },
	 initialErrors: {
      password: "",
	 },
    validationSchema,

    onSubmit: (data) => {
      dispatch(userUpdateProfile(data));
    },
  });

  return (
    <ProfileBlock mix={cl.component}>
      <form className={cl.form} onSubmit={formik.handleSubmit}>
        <Input
          id="displayName"
          placeholder={t("Username")}
          value={formik.values["displayName"]}
          onChange={formik.handleChange}
        />
        <Input
          id="photoURL"
          placeholder={t("Photo URL")}
          value={formik.values["photoURL"]}
          onChange={formik.handleChange}
        />
        <Input
          id="password"
          placeholder={t("Password")}
          value={formik.values["password"]}
          invalidMessage={formik.errors["password"]}
          onChange={formik.handleChange}
          type={"password"}
        />
        <div>
          <Button
            type="submit"
            label="Update"
            isDisabled={formik.initialValues === formik.values}
          />
        </div>
      </form>
    </ProfileBlock>
  );
};

export default ProfileUserdata;
