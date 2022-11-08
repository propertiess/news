export const getDate = (numDate: number) => {
  const date = new Date(numDate * 1000);
  let time = new Date(numDate * 1000);

  let timeLength = time.toLocaleDateString().length;

  return {
    date: date.toLocaleDateString(),
    time: time.toLocaleTimeString().substring(0, timeLength - 5),
    initDate: date,
    initTime: time
  };
};
