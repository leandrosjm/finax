import { Grid } from '@material-ui/core';
import { FiArrowDown, FiPlusCircle } from 'react-icons/fi';
import Button from '../Button';
import { LoadMoreContainer } from './styles';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

interface LoadMoreProps {
  loadMore: () => void;
  text: string;
}

export function LoadMore({ loadMore, text }: LoadMoreProps) {
  return (
    <LoadMoreContainer>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={1}>
          <Button
            icon={<MdKeyboardDoubleArrowDown size={35} />}
            fullWidth
            text={text}
            variant="text"
            type="button"
            onClick={loadMore}
            padding="0px"
            height="0px"
          />
        </Grid>
      </Grid>
    </LoadMoreContainer>
  );
}
