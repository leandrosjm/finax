import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ListItemIconUi, IconMenuContainer } from './style';

export type OptionProps = {
  icon: JSX.Element;
  text: string;
  onClick: () => void;
  disabled?: boolean;
};

type IconMenuProps = {
  options: OptionProps[];
  padding?: string;
};

export const IconMenu = ({ options, padding }: IconMenuProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <IconMenuContainer padding={padding}>
      <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        disableAutoFocusItem
        autoFocus={false}
      >
        {options.map((option) => (
          <MenuItem
            key={option.text}
            onClick={() => {
              option.onClick();
              handleClose();
            }}
            disabled={option.disabled}
          >
            <ListItemIconUi>{option.icon}</ListItemIconUi>
            <Typography variant="caption" noWrap>
              {option.text}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </IconMenuContainer>
  );
};
