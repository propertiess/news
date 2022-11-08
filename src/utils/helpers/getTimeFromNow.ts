import moment from 'moment';

export const getTimeFromNow = (date: Date) => {
  return {
    time: moment([
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getHours(),
      date.getMinutes()
    ]).fromNow()
  };
};
