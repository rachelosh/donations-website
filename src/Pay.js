import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function CreditCardForm() {
  const [values, setValues] = React.useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div style={{ width: '50%', marginRight: '25%' }}>
      <TextField
        label="מספר כרטיס אשראי"
        variant="outlined"
        fullWidth
        margin="normal"
        value={values.cardNumber}
        onChange={handleChange('cardNumber')}
      />

      <TextField
        label="תאריך תוקף"
        variant="outlined"
        fullWidth
        margin="normal"
        value={values.expirationDate}
        onChange={handleChange('expirationDate')}
      />

      <TextField
        label="CVV"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        value={values.cvv}
        onChange={handleChange('cvv')}
      />

      <Button variant="contained" color="primary" sx={{ mt: 3, marginRight: '43%' }}>
        שליחה
      </Button>
    </div>
  );
}

