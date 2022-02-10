import { createActionCreator } from "deox";
import { User } from "@firebase/auth";
import { Dispatch } from "redux";

import Firebase from "../../api/Firebase";
import { setSettingsAction } from "./settings";
import { IAuth, IUpdateUserProfile } from "../../types/auth";

/**
 *
 * 	ACTIONS
 *
 */

export const setUserDataAction = createActionCreator(
  "SET_USER_DATA",
  (resolve) => (credentials: User) => resolve(credentials)
);

export const userLogoutAction = createActionCreator("USER_LOGOUT");

/**
 *
 * 	THUNKS
 *
 */

export const userSignUp =
  ({ email, password }: IAuth) =>
  async (dispatch: Dispatch) => {
    const credentials = await Firebase.createUser({ email, password });
    if (credentials) dispatch(setUserDataAction(credentials));
  };

export const userLogin =
  ({ email, password }: IAuth) =>
  async (dispatch: Dispatch) => {
    const credentials = await Firebase.loginUser({ email, password });
    const data = await Firebase.getSettings();
    if (credentials) {
      dispatch(setUserDataAction(credentials));
    }
    if (data) {
      dispatch(setSettingsAction(data.settings));
    }
  };

export const userLogout = () => async (dispatch: Dispatch) => {
  await Firebase.logoutUser();
  dispatch(userLogoutAction());
};

export const userUpdateProfile =
  ({ displayName, photoURL, password }: IUpdateUserProfile) =>
  async (dispatch: Dispatch) => {
    const userData = await Firebase.updateUserData({
      displayName,
      photoURL,
      password,
    });

    if (userData) dispatch(setUserDataAction(userData));
  };
