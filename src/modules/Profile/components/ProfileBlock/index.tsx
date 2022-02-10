import classNames from "classnames";
import { FC } from "react";

import cl from "./styles.module.scss";

interface IProfileBlock {
  mix?: string;
}

const ProfileBlock: FC<IProfileBlock> = ({ children, mix }) => (
  <div className={classNames(cl.component, mix || "")}>{children}</div>
);

export default ProfileBlock;
