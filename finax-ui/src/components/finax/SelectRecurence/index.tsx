import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ChangeEvent, memo, useEffect, useState } from 'react';

interface ISelectProps {
  value?: any | null;
  name?: string;
  label?: string;
  className?: any;
  disable?: boolean;
  handleChange: (event: ChangeEvent<any>, newValue: any) => void;
}

function SelectRecurence({
  name,
  value,
  handleChange,
  label,
  className,
  disable = false,
}: ISelectProps) {

  const [listOptions, setList] = useState<any[]>([]);
  const [valueOption, setValue] = useState<any | null | undefined>(value);
  const handleChangeValue = (event: ChangeEvent<any>, newValue: any) => {
    setValue(newValue);
    handleChange(event, newValue);
  }
  const loadData = () => {
    const mapData: any[] = ['Anual', 'Mensal', 'Trimestral', 'Semanal'].map((row) => ({
      code: row,
      name: row,
    }));
    
   if (value && value.code !== '' && (!value.name || value?.name === '')){
      value = { ...value, name: mapData.find((x) => x.code === value?.code)?.name || '' };
   }
   setValue(value);
   setList(mapData);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Autocomplete
      options={listOptions}
      getOptionLabel={(option: any) => option.name}
      getOptionSelected={(option: any) => option.code === value?.code}
      name={name}
      id="select-recurrence"
      fullWidth
      value={valueOption}
      disabled={disable}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label || 'Recorrência'}
          margin="normal"
          variant="filled"
          disabled={disable}
          fullWidth
        />
      )}
      onChange={(event: ChangeEvent<any>, newValue: any) => {
        handleChangeValue(event, newValue);
      }}
      {...className}
    />
  );
}

export default memo(SelectRecurence);
