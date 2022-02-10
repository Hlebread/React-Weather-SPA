import { FC } from "react";

import useTitle from "../../hooks/useTitle";
import cl from "./styles.module.scss";

import { ProfileAvatar, ProfileUserdata } from "./components";

const Profile: FC = () => {
  useTitle("Your Profile");
  return (
    <main className={cl.component}>
      <ProfileAvatar />
      <ProfileUserdata />
    </main>
  );
};

export default Profile;
