import { t } from "i18next";

import { days } from "../../../../utils/constants";
import getFormatedDate from "../../../../utils/getFormatedDate";

interface IChartData {
  day: Array<number>;
  night: Array<number>;
  time?: Array<number>;
}

const createLabels = (time: Array<number>) =>
  time.map((timestamp: number) => {
    const { date, dayName, month } = getFormatedDate(timestamp, days);
    return `${t(dayName + "_short")}, ${date}.${month + 1}`;
  });

const createData = ({ day, night }: IChartData) => ({
  dayTemp: {
    label: t("day"),
    data: day,
    borderColor: "rgb(255, 166, 0)",
    backgroundColor: "rgba(255, 166, 0, 0.5)",
  },
  nightTemp: {
    label: t("night"),
    data: night,
    borderColor: "rgb(0, 26, 98)",
    backgroundColor: "rgba(0, 26, 98, 0.5)",
  },
});

const data = ({ day, night, time = [] }: IChartData) => ({
  labels: createLabels(time),
  datasets: [...Object.values(createData({ day, night }))],
});

export default data;
