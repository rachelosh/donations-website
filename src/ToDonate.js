import * as React from 'react';
import { Button, } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoneyIcon from '@mui/icons-material/Money';
import "./AddDonation.css";
const ToDonate = (props) => {
    const [errors, setErrors] = useState({});
    const [listDonates, setListDonates] = useState({
        firstName: "",
        amount: "",
        dedication: "",
        dateDonate: new Date()
    });
    const handelSubmit = (e) => {
        e.preventDefault();
        let result = validate();
        if (Object.keys(result).length === 0) {
            listDonates.dateDonate = new Date();
            listDonates.amount = parseInt(listDonates.amount);
            props.addPeopleToList(listDonates);
            setListDonates({
                firstName: "",
                amount: 0,
                dedication: "",
            });
        }

        else setErrors(result);
    };
    const validate = () => {
        let err = {};
        if (!listDonates.firstName)
            err.firstName = "שם הוא שדה חובה";
        if (!listDonates.amount)
            err.amount = "סכום לא תקין";
        return err;

    };
    const change = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        setListDonates((prev) => ({ ...prev, [inputName]: inputValue }));

    };
    return (
        <fragment >
            <form onSubmit={handelSubmit} style={{ marginRight: 'auto', marginLeft: 'auto', width: '50%' }}>
                <TextField
                    id="outlined-basic"
                    label="שם"
                    variant="outlined"
                    name="firstName"
                    value={listDonates.firstName}
                    onChange={change}
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ gap: '10px' }}


                />


                <TextField
                    id="outlined-basic"
                    label="סכום"
                    variant="outlined"
                    name="amount"
                    type="number"
                    value={listDonates.amount}
                    onChange={change}
                    error={Boolean(errors.amount)}
                    helperText={errors.amount}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MoneyIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    id="outlined-basic"
                    label="הקדשה"
                    variant="outlined"
                    name="dedication"
                    value={listDonates.dedication}
                    onChange={change}
                />
                <Button
                    type="submit"
                    endIcon={<SendIcon />}
                    variant="contained"
                    sx={{ mt: 3, marginRight: '40%', marginLeft: '40%' }}
                >
                    שליחה
                </Button>
            </form>

        </fragment>
    );
}

export default ToDonate;
