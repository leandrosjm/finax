import { NoDataContainer, InfoIcon } from './style';

type NoDataProps = {
  height?: string;
  desiredSelection?: boolean;
};

export default function NoData({ height, desiredSelection = true }: NoDataProps) {
  return (
    <NoDataContainer height={height as string}>
      <InfoIcon />
      <h2>{desiredSelection ? 'No results found' : 'Enter the desired selection'}</h2>
    </NoDataContainer>
  );
}
