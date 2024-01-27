/* eslint-disable arrow-body-style */
import React, { ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';
import Modal from '../Modal';
import AlertInline from '../AlertInline';

interface IConfirmChanges {
  title: string;
  open: boolean;
  alertMessage: string;
  outlined?: boolean;
  value: string;
  disabled?: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  handleChange: (event: ChangeEvent<any>) => void;
}

const ConfirmChanges: React.FC<IConfirmChanges> = ({
  title,
  open,
  alertMessage,
  value,
  disabled,
  handleClose,
  handleChange,
  handleConfirm,
}: IConfirmChanges) => {
  return (
    <Modal
      title={title}
      open={open}
      handleClose={handleClose}
      showActions
      buttonSave={{
        color: 'secondary',
        title: 'Confirm',
        variant: 'contained',
        onClick: handleConfirm,
        disable: disabled,
      }}
      buttonCancel={{
        color: 'inherit',
        title: 'Cancel',
        variant: 'contained',
        onClick: handleClose,
      }}
    >
      <AlertInline text={alertMessage} variant="dashed" severity="warning" className="mb-16" />

      <TextField
        fullWidth
        label="Enter your comment"
        variant="filled"
        multiline
        rows={3}
        value={value}
        onChange={handleChange}
      />
    </Modal>
  );
};
export default ConfirmChanges;
