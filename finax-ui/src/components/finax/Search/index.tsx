import { InputAdornment, TextField, Button } from '@material-ui/core';
import React from 'react';
import { MdSearch } from 'react-icons/md';
import { SearchContainer } from './style';

interface ISearchProps {
  searchValue: string;
  onChange: (event: any) => void;
  onKeyPress?: (event: any) => void;
  onClick?: () => void;
  showButton?: boolean;
  label?: string;
  fullWidth?: boolean;
  margin?: string;
}

const Search: React.FC<ISearchProps> = ({
  onChange,
  onKeyPress,
  showButton,
  searchValue,
  label = 'Search',
  fullWidth = true,
  margin,
  onClick,
}: ISearchProps) => (
  <SearchContainer margin={margin}>
    <TextField
      label={label}
      variant="filled"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <MdSearch style={{ width: '22px', height: '22px', color: '#B0B0AF' }} />
          </InputAdornment>
        ),
      }}
      value={searchValue}
      onChange={onChange}
      fullWidth={fullWidth}
      onKeyUpCapture={onKeyPress}
    />
    {showButton && (
      <Button style={{ marginLeft: '10px' }} color="primary" variant="contained" onClick={onClick}>
        Apply
      </Button>
    )}
  </SearchContainer>
);
export default Search;
