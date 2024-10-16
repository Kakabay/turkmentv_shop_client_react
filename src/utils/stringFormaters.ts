export const dateSplitYear = (date: string) => {
  const formatedString = date.split(' ')[0].split('-').reverse().join('.');
  return formatedString;
};
export const dateSplitDays = (date: string) => {
  const formatedString = date.split(' ')[1];
  return formatedString;
};
