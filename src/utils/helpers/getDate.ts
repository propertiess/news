export const getDate = (numDate: number) => {
  const date = new Date(numDate * 1000).toLocaleDateString();
  let time = new Date(numDate * 1000).toLocaleTimeString();
  time = time.substring(0, time.length - 3);

  return {
    date,
    time
  };
};
