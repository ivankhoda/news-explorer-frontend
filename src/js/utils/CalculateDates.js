import { MONTH } from '../constants/Constants';

function sevenDays() {
  const last = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const now = new Date(Date.now());
  return { last, now };
}

const formatCardDate = (date) => {
  if (!date.includes(`${MONTH}`)) {
    const initialDate = new Date(date);
    const day = initialDate.getDate();
    const month = initialDate.getMonth();
    const year = initialDate.getFullYear();
    return `${day} ${MONTH[month]}, ${year}`;
  }
  if (date.includes(`${MONTH}`)) {
    return date;
  }
};
export { sevenDays, formatCardDate };
