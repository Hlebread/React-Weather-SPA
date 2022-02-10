import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import cl from "./styles.module.scss";
import useTitle from "../../hooks/useTitle";
import { fetchWeather, setGeoposition } from "../../store/actions/weather";
import { useAppSelector } from "../../store";
import { getPosition } from "../../utils/position";

import { AppPreloader, ErrorMessage } from "../../components";
import { Chart, CurrentWeather, Forecast } from "./components";

const Dashboard: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const position = useAppSelector((state) => state.weather.position);
  const { isLoading, error } = useAppSelector((state) => state.weather);

  useTitle("dashboard");
  useEffect(() => {
    if (position) {
      dispatch(fetchWeather(position));
    } else {
      const getCurrentPosition = async () => {
        const pos = await getPosition();

        dispatch(setGeoposition(pos));
        dispatch(fetchWeather(pos));
      };

      getCurrentPosition();
    }
  }, [dispatch, navigate, position]);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <main className={cl.component}>
      {isLoading ? (
        <AppPreloader active />
      ) : (
        <>
          <CurrentWeather />
          <Forecast />
          <Chart />
        </>
      )}
    </main>
  );
};

export default Dashboard;
