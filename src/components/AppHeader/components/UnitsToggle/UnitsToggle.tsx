import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";

import { FAHRENHEIT, CELSIUS } from "../../../../utils/constants";
import { setUnitsAction } from "../../../../store/actions/settings";
import { useAppSelector } from "../../../../store";

import { SwitchButton } from "../../..";

const UnitsToggle: FC = () => {
  const units = useAppSelector((state) => state.settings.units);
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(units === FAHRENHEIT);
  const label = units === FAHRENHEIT ? "F" : "C";

  const toggleSwitch = () => {
    setIsActive((prevValue) => !prevValue);
    dispatch(setUnitsAction(units === FAHRENHEIT ? CELSIUS : FAHRENHEIT));
  };

  return (
    <SwitchButton isToggled={isActive} toggle={toggleSwitch} label={label} />
  );
};

export default UnitsToggle;
