export const formatDateUtc = (timestamp: string, viewSeconds?: boolean): string => {
  const timestampRemove = timestamp.replace('+00', '');

  if (timestampRemove.length === 0) return '-';

  let dateFormatted = '-';

  if (timestampRemove) dateFormatted = timestampRemove.replaceAll('-', '/').replace('T', ' ').replace('.000Z', '');

  const [date, hours] = dateFormatted.split(' ');
  const [year, month, day] = date.split('/');
  const [hour, minute, seconds] = hours.split(':');

  let datetime = `${month}/${day}/${year} ${hour}:${minute}`;

  if (viewSeconds) datetime += `:${seconds}`;

  return datetime;
};
