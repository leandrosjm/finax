import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ChangeEvent, memo, useEffect, useState } from 'react';

interface ISelectOperatorsProps {
  value?: any | null;
  name?: string;
  label?: string;
  className?: any;
  disable?: boolean;
  verifyOooi?: boolean;
  verifyFde?: boolean;
  verifyMm?: boolean;
  pacote?: string;
  handleChangeOperator: (event: ChangeEvent<any>, newValue: any) => void;
}

function SelectOperators({
  name,
  value,
  handleChangeOperator,
  label,
  className,
  disable = false,
  verifyOooi = false,
  verifyFde = false,
  verifyMm = false,
  pacote,
}: ISelectOperatorsProps) {
  const [listOperators, setListOperators] = useState<any[]>([]);
  const [valueOperator, setValueOperator] = useState<any | null | undefined>(value);
  const loadData = () => {
    const options = [
      { name: 'Agosto / 2023', code: 1 },
      { name: 'Setembro / 2023', code: 2 },
    ];
    setListOperators(options);

    setValueOperator({ name: 'Agosto / 2023', code: 1 });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Autocomplete
      options={listOperators}
      getOptionLabel={(option: any) => option.name}
      getOptionSelected={(option: any) => option.code === value?.code}
      name={name}
      id="select-operators"
      fullWidth
      value={valueOperator}
      disabled={disable}
      size='small'
      renderInput={(params) => (
        <TextField
          {...params}
          label={label || 'Operator'}
          margin="normal"
          variant="outlined"
          disabled={disable}
          fullWidth
        />
      )}
      onChange={(event: ChangeEvent<any>, newValue: any) => {
        handleChangeOperator(event, newValue);
      }}
      {...className}
    />
  );
}

export default memo(SelectOperators);
