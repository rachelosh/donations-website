import { Link } from "react-router-dom";
import "./NavBar.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconChange from './ToggleColorMode'
import { useTheme } from '@mui/material/styles';
import { Typography, Stack, CircularProgress, Tooltip, IconButton } from "@mui/material";
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
const NavBar = (props) => {
    const theme = useTheme();
    const [rateTooltip, setRateTooltip] = React.useState('$')
    function changeRateTooltip() {
        setRateTooltip(props.coin === "shekel" ? "₪" : "$");
    }
    function handleChangeCoin() {
        const confirmation = window.confirm(`המרת מטבע ל:${rateTooltip}`);
        if (confirmation) {
            props.changeCoin();
            changeRateTooltip();
        }
    }

    return (<>
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                '& > :not(style)': {
                    m: 1,
                    width: 400,
                    height: 200,
                    marginTop: '2%'
                },
            }}
        ><Paper elevation={3} style={{ padding: '15px', textAlign: 'center' }}>
                <Stack spacing={2}>
                    <Box sx={{ position: 'relative', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', }}>
                        <CircularProgress
                            variant="determinate"
                            size={100}
                            value={props.sumPercent < 100 ? props.sumPercent : 100}
                            sx={{ strokeLinecap: 'round' }} />
                        <Box sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        >
                            <Typography variant="caption" component="div" color="text.secondary" sx={{ fontSize: 15, fontWeight: "bold" }}>
                                {`${props.sumPercent}%`}
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
            </Paper>
            <Paper elevation={3} style={{ padding: '15px', textAlign: 'center' }}>

                <Typography className='compaignDetails' sx={{ fontSize: 30, color: theme.palette.primary.main, letterSpacing: "3px" }}>
                    {props.coin === "shekel" ? `₪${(props.targetAmount / 1).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} `
                        : `$${(props.targetAmount / props.exchangeRate).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} `} :יעד הקמפיין
                </Typography>
                <Typography className='compaignDetails' sx={{ fontSize: 30, color: theme.palette.primary.main, letterSpacing: "3px" }}>
                    {props.coin === "shekel" ? `₪${(props.sumDonate / 1).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} `
                        : `$${(props.sumDonate / props.exchangeRate).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} `} :עד כה נתרמו
                </Typography>

                <Typography className='compaignDetails' sx={{ fontSize: 30, color: theme.palette.primary.main, letterSpacing: "3px" }}>
                    {props.cntMen} :מספר תורמים
                </Typography>
            </Paper>
            <Paper elevation={3} style={{ padding: '15px', textAlign: 'center' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/SHALVA_New_Logo_Hebrew.png" alt='whet append' style={{ direction: 'ltr', width: '80%' }} />
            </Paper>

        </Box>

        <nav style={{ backgroundColor: theme.palette.primary.main }}>
            <ul>
                <li sx={{ Margin: '100px' }}>
                    <Link to="Home" style={{ textDecoration: 'none', fontSize: 'xx-large', color: theme.palette.common.white, paddingLeft: '25px' }}>Home </Link>
                </li>
                <li>
                    <Link to="Steps" style={{ textDecoration: 'none', fontSize: 'xx-large', color: theme.palette.common.white, paddingLeft: '25px' }}>הוספת תרומה</Link>
                </li>
                <li>
                    <Link to="Donations" style={{ textDecoration: 'none', fontSize: 'xx-large', color: theme.palette.common.white }}>כל התרומות</Link>
                </li>
                <li>
                    <IconChange />
                </li>
                <li>
                    <Tooltip sx={{ width: 105 }} title={`${rateTooltip}- החלף ל `} >
                        <IconButton sx={{ ml: 1, color: theme.palette.common.white }} onClick={handleChangeCoin} color="inherit">
                            <CurrencyExchangeRoundedIcon />
                        </IconButton>
                    </Tooltip>
                </li>
            </ul>
        </nav>
    </>
    );
}

export default NavBar;