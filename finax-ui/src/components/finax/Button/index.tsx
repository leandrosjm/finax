import React from 'react';
import Box from '@material-ui/core/Box';
import { Button as ButtonUi } from '@material-ui/core';
import { ButtonContainer } from './style';

type ButtonProps = {
  height?: string;
  text: string;
  justifyContent?: 'flex-end' | 'center';
  display?: 'flex' | 'block';
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  icon?: JSX.Element | React.ReactNode;
  background?: string | 'default' | 'inherit' | 'primary' | 'secondary';
  padding?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  justifyContent,
  display,
  type,
  onClick,
  fullWidth,
  variant,
  color,
  icon,
  height,
  disabled,
  background,
  padding,
}: ButtonProps) => (
  <ButtonContainer height={height} background={background} padding={padding}>
    <Box justifyContent={justifyContent} display={display || 'block'}>
      <ButtonUi type={type} onClick={onClick} variant={variant} color={color} fullWidth={fullWidth} disabled={disabled}>
        {icon ? <div className="icon">{icon}</div> : null}
        <div className="text">{text}</div>
      </ButtonUi>
    </Box>
  </ButtonContainer>
);

export default Button;
