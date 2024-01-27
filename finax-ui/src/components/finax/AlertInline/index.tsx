import React from 'react';
import { createStyles } from '@material-ui/styles';
import { Alert } from '@material-ui/lab';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    borderDashed: {
      borderStyle: 'dashed',
      borderColor: ' #FCC216',
      marginBottom: 16,
    },
  })
);

interface IAlertInline {
  severity: 'error' | 'info' | 'success' | 'warning';
  title?: string;
  text?: string;
  variant?: 'outlined' | 'filled' | 'standard' | 'dashed';
  color?: 'error' | 'info' | 'success' | 'warning';
  className?: any;
}

const AlertInline: React.FC<IAlertInline> = ({
  severity,
  title,
  text,
  variant = 'standard',
  color,
  className,
}: IAlertInline) => {
  const classes = useStyles();
  return (
    <Grid item className="mb-16" xs={12}>
      <Alert
        severity={severity}
        title={title}
        variant={variant === 'dashed' ? 'outlined' : variant}
        className={variant === 'dashed' ? classes.borderDashed : className}
        color={color}
      >
        {text}
      </Alert>
    </Grid>
  );
};

export default AlertInline;
