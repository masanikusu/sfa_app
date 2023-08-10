import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";

interface SelectItem {
  value: string | number;
  label: string
}

type Props = {
  id: string;
  label: string;
  items: SelectItem[];
}

const SelectItem = (props: Props) => {
  const {id, label, items } = props;
  const labelId = id + '-label';

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          labelId={labelId}
          id={id}
          label={label}
        >
          <MenuItem value=''><em>選択してください</em></MenuItem>
          {items.map((item, index) => (
            <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
    </>
  );
};

export default SelectItem;
