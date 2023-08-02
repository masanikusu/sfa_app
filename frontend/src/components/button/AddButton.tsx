import { Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

// type Props = {

// }

const AddButton = () => {
  return (
    <Button
      variant='outlined'
      startIcon={<AddIcon/>}
    >
      追加
    </Button>
  )
}

export default AddButton