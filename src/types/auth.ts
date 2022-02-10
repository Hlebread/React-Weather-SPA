export interface IAuth {
  email: string;
  password: string;
}

export interface IUpdateUserProfile {
  displayName?: string;
  password?: string;
  photoURL?: string;
}
