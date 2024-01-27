const formatDate = (timestamp: string | Date): string => {
  if (timestamp) {
    const date = new Date(timestamp); // Wed Jul 28 2021 16:21:06 GMT-0300 (Brasilia Standard Time)

    const format = (value: number) => (value <= 9 ? `0${value}` : value);
    return `${format(date.getMonth() + 1)}/${format(date.getDate())}/${date.getFullYear()}  ${format(
      date.getHours()
    )}:${format(date.getMinutes())}:${format(date.getSeconds())}`;
  }
  return timestamp as string;
};

export default formatDate;
