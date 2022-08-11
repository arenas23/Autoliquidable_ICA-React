import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Tipo Documento</FormLabel>
      <RadioGroup
        row
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Nit" control={<Radio />} label="Nit" />
        <FormControlLabel value="CC" control={<Radio />} label="Cedula Ciudadania" />
        <FormControlLabel value="TI" control={<Radio />} label="Tarjeta Identidad" />
        <FormControlLabel value="CE" control={<Radio />} label="Cedula Extranjeria"
        />
      </RadioGroup>
    </FormControl>
  );
}