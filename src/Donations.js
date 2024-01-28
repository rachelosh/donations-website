import OneDonate from "./Card";
import * as React from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

const Donations = (props) => {

    const [sortedArr, setSortedArr] = useState(props.arrDonation);
    const BasicSelect = () => {
        const [sortedBy, setSortedBy] = useState('');

        const handleChange = (event) => {
            setSortedBy(event.target.value);
            if (event.target.value === 'amount') {
                setSortedArr([...props.arrDonation].sort((a, b) => b.amount - a.amount));
            } else if (event.target.value === 'new') {
                setSortedArr([...props.arrDonation].sort((a, b) => new Date(b.dateDonate) - new Date(a.dateDonate)));
            } else if (event.target.value === 'old') {
                setSortedArr([...props.arrDonation].sort((a, b) => new Date(a.dateDonate) - new Date(b.dateDonate)));
            }
        };


        return (

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">sorted by</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortedBy}
                    label="sortedBy"
                    onChange={handleChange}
                >
                    <MenuItem value={'amount'}>סכום</MenuItem>
                    <MenuItem value={'new'}>חדש</MenuItem>
                    <MenuItem value={'old'}>ישן</MenuItem>
                </Select>
            </FormControl>
        );
    }

    let [search, setSearch] = useState(null);
    return (<>
        <Box sx={{ minWidth: 120, width: '15%', marginRight: 'auto', marginLeft: 'auto', }} >
            {BasicSelect()}
            <FormControl sx={{ width: "100%" }}>
                <TextField
                    type='search'
                    onChange={(e) => { setSearch(e.target.value) }}
                    placeholder="search"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </FormControl>

        </Box>
        <ul style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', marginRight: 'auto', marginLeft: 'auto'
        }}>
            {search !== null && sortedArr.filter((item) => {
                return (item.firstName.startsWith(search) || item.firstName === search || item.dedication.startsWith(search) || item.dedication === search)
            }).map((donation, index) => {
                return <li classfirstName="cards-container" key={index}>
                    <OneDonate coin={props.coin} loading={props.loading} exchangeRate={props.exchangeRate}
                        key={index}
                        donate={donation}
                    /></li>
            })}
            {search === null && sortedArr.map((donation, index) => {
                return <div classfirstName="cards-container" key={index}>
                    <OneDonate coin={props.coin} loading={props.loading} exchangeRate={props.exchangeRate}
                        key={index}
                        donate={donation}
                    /></div>
            })}
        </ul>
    </>);
}

export default Donations;