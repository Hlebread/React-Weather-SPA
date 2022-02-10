import { ReactNode, ReactChild } from "react";
import { IActive } from "../../types/common";

export default interface INavbar extends IActive {
  name?: string;
  link?: string;
  icon?: ReactNode | ReactChild;
}
