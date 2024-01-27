interface DifferenceProps {
  difference_time?: {
    years?: number;
    months?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
  };
}

export const formatDifference = ({ difference_time }: DifferenceProps): string => {
  let concatString = '';

  if (difference_time?.years) concatString += `${difference_time?.years}y `;

  if (difference_time?.months) concatString += `${difference_time?.months}m `;

  if (difference_time?.hours) concatString += `${difference_time?.hours}h `;

  if (difference_time?.minutes) concatString += `${difference_time?.minutes}min`;

  if (difference_time?.days) concatString = `${difference_time?.days}d `;

  return concatString;
};
