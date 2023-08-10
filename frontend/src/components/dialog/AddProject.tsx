// import { useState } from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';

type Props = {
  open: boolean;
  onClose: () => void;
  onRegister: (value: T) => void;
  label: string;
};

const AddRow = (props: Props) => {
  const { open, onClose, label } = props;
  const { handleSubmit } = useForm<T>({ mode: 'onChange' });

  const handleClose = () => onClose();

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth='md'>
        <DialogTitle>{label}</DialogTitle>
        <DialogContent>
          <div className='dialog'>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item ></Grid>
            </Grid>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddRow;
