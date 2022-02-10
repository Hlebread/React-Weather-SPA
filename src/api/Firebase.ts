import { FirebaseError, initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  updatePassword,
} from "firebase/auth";

import {
  defaultState,
  ISettingsState,
} from "../store/reducers/settingsReducer";
import database from "../axios/axiosDatabase";
import { firebaseConfig } from "../src.config";
import { IAuth, IUpdateUserProfile } from "../types/auth";

initializeApp(firebaseConfig);
const auth = getAuth();

export default class Firebase {
  static async createUser({ email, password }: IAuth) {
    try {
      const { user } = (await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )) as any;
      localStorage.setItem("token", user.accessToken);

      await database.patch("users.json", {
        [user.uid]: JSON.stringify({
          settings: defaultState,
        }),
      });

      return user;
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        throw error.code;
      }
    }
  }

  static async loginUser({ email, password }: IAuth) {
    try {
      const { user } = (await signInWithEmailAndPassword(
        auth,
        email,
        password
      )) as any;
      localStorage.setItem("token", user.accessToken);

      return user;
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        throw error.code;
      }
    }
  }

  static async logoutUser() {
    signOut(auth);
    localStorage.removeItem("token");
  }

  static async updateUserData(values: IUpdateUserProfile) {
    if (!auth.currentUser) {
      return;
    }

    try {
      const { password, ...data } = values;

      if (password) {
        await updatePassword(auth.currentUser, password);
      }
      await updateProfile(auth.currentUser, data);

      return auth.currentUser;
    } catch {}
  }

  static async getSettings() {
    try {
      if (auth.currentUser) {
        const { data } = await database.get("users.json");

        return JSON.parse(data[auth.currentUser.uid]);
      }
    } catch (e) {
      console.error("Error adding document: ", e);
      return;
    }
  }

  static async updateSettings(settings: ISettingsState) {
    if (auth.currentUser) {
      await database.patch("users.json", {
        [auth.currentUser.uid]: JSON.stringify({
          settings,
        }),
      });
    }
  }
}
