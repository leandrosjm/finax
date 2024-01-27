interface Props {
  format?: 'B' | 'I';
}
export function getUTCDatetime({ format = 'B' }: Props): string {
  const now = new Date().toISOString();

  const formatFaseOne = now.split('T');
  const formatFaseTwo = formatFaseOne[0].split('-');
  const formatHours = formatFaseOne[1].split(':');

  const formatReturn = {
    B: `${formatFaseTwo[1]}/${formatFaseTwo[2]}/${formatFaseTwo[0]} - ${formatHours[0]}:${formatHours[1]}z`,
    I: `${formatFaseTwo[0]}-${formatFaseTwo[1]}-${formatFaseTwo[2]} ${formatHours[0]}:${formatHours[1]}:00`,
  };

  return formatReturn[format];
}
