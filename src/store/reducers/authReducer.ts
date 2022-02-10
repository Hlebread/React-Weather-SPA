import { User } from "@firebase/auth";
import { createReducer } from "deox";

import { setUserDataAction, userLogoutAction } from "../actions/auth";

export interface IAuthState {
  userData: User | null;
  isAuthorized: boolean;
}

const defaultState: IAuthState = {
  userData: {} as User,
  isAuthorized: false,
};

export const authReducer = createReducer(defaultState, (handleAction) => [
  handleAction(setUserDataAction, (state, { payload }: any) => ({
    ...state,
    userData: payload,
    isAuthorized: true,
  })),
  handleAction(userLogoutAction, () => defaultState),
]);
