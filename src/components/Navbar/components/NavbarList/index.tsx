import React, { FC } from "react";
import { AiOutlineCloud } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

import cl from "./styles.module.scss";

import { NavbarListItem } from "..";

const menuItems = [
  { name: "dashboard", link: "/dashboard", icon: <AiOutlineCloud /> },
  { name: "settings", link: "/settings", icon: <IoSettingsOutline /> },
];

const NavbarList: FC = () => {
  const { t } = useTranslation();

  return (
    <ul className={cl.component}>
      {menuItems.map((item, index) => (
        <NavbarListItem
          name={t(item.name)}
          link={item.link}
          icon={item.icon}
          key={index}
        />
      ))}
    </ul>
  );
};

export default NavbarList;
