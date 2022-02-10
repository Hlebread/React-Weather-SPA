import { FC } from "react";

import cl from "./styles.module.scss";
import { useAppSelector } from "../../../../store";
import { baseLinksConfig } from "../../../../src.config";

import ProfileBlock from "../ProfileBlock";

const ProfileAvatar: FC = () => {
  const src = useAppSelector((state) => state.auth.userData.photoURL);

  return (
    <ProfileBlock mix={cl.component}>
      <img src={src || baseLinksConfig.USER_IMG} alt="User" />
    </ProfileBlock>
  );
};

export default ProfileAvatar;
