import { TextField } from '@mui/material';

type Props = {
  id: string;
  label: string;
}

const MultiText = ({id, label}: Props) => {
  return (
    <>
      <TextField
        id={id}
        label={label}
        multiline
        rows={4}
        defaultValue=''
      />
    </>
  );
};

export default MultiText;
