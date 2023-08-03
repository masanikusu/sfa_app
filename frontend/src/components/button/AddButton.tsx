import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  action: () => void;
};

const AddButton = ({ action }: Props) => {
  return (
    <Button variant='outlined' startIcon={<AddIcon />} action={action}>
      追加
    </Button>
  );
};

export default AddButton;
