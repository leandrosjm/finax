/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import BorderContainer from '../BorderContainer';
import Button from '../Button'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      zIndex: 100,
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface IDialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: IDialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

interface IButton {
  color: 'default' | 'primary' | 'secondary' | 'inherit';
  variant?: 'contained' | 'outlined' | 'text';
  title: string;
  onClick: () => void;
  icon?: JSX.Element | React.ReactNode;
  disable?: boolean;
  background?: string;
}
interface IModalProps {
  icon?: any,
  open: boolean;
  dividers?: boolean;
  border?: boolean;
  maxWidth?: 'lg' | 'md' | 'sm' | 'xl' | 'xs' | false;
  showActions?: boolean;
  children?: React.ReactNode;
  handleClose: () => void;
  handleBackDrop?: (event: any, reason: any) => void;
  title: string;
  subtitle?: string;
  buttonSave?: IButton;
  buttonCancel?: IButton;
  buttonDelete?: IButton;
  buttonSaveAndArchive?: IButton;
}

const Modal: React.FC<IModalProps> = ({
  icon,
  open,
  children,
  handleClose,
  handleBackDrop,
  title,
  showActions,
  buttonSave,
  buttonCancel,
  buttonDelete,
  buttonSaveAndArchive,
  dividers,
  maxWidth,
  subtitle,
  border,
}: IModalProps) => (
  <Dialog
    fullWidth
    onClose={handleBackDrop || handleClose}
    aria-labelledby="customized-dialog-title"
    open={open}
    maxWidth={maxWidth}
  >
    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
      {icon} {title}
      {subtitle ? (
        <div className="modal-subtitle">
          <small>{subtitle}</small>
        </div>
      ) : null}
    </DialogTitle>

    <DialogContent dividers={dividers}>
      {!border ? <div>{children}</div> : <BorderContainer borderLabel="Alert">{children}</BorderContainer>}
    </DialogContent>

    {showActions ? (
      <DialogActions>
        {buttonCancel ? (
          <Button
            onClick={buttonCancel.onClick}
            color={buttonCancel?.color}
            variant={buttonCancel.variant}
            text={buttonCancel?.title}
          />
        ) : null}
        {buttonDelete ? (
          <Button
            onClick={buttonDelete.onClick}
            color={buttonDelete?.color}
            variant={buttonDelete.variant}
            text={buttonDelete?.title}
          />
        ) : null}
        {buttonSaveAndArchive && (
          <Button
            onClick={buttonSaveAndArchive.onClick}
            color={buttonSaveAndArchive.color}
            variant={buttonSaveAndArchive.variant}
            text={buttonSaveAndArchive?.title}
            disabled={buttonSaveAndArchive?.disable}
            background={buttonSaveAndArchive?.background}
          />
        )}
        {buttonSave ? (
          <Button
            onClick={buttonSave.onClick}
            color={buttonSave?.color}
            variant={buttonSave.variant}
            icon={buttonSave.icon}
            disabled={buttonSave.disable}
            text={buttonSave?.title}
          />
        ) : null}
      </DialogActions>
    ) : null}
  </Dialog>
);

export default Modal;
