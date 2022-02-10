const getFormatedDate = (timestamp: number, names: string[]) => {
  const currentDate = new Date();
  const dt = new Date(timestamp * 1000);
  const dtDate = dt.getDate();
  const dtDay = dt.getDay();
  const dayName =
    dtDate === currentDate.getDate() ? "today" : names[dtDay < 0 ? 6 : dtDay];
  const month = dt.getMonth();
  return { date: dtDate, dayName, month };
};

export default getFormatedDate;
