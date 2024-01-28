import './App.css';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router';
import Donations from './Donations';
import { useState, useMemo, useEffect } from 'react';
import Home from './Home';
import Steps from './Steps';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';
import { ColorModeContext } from './ToggleColorMode'
import axios from 'axios';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/700.css';

function App() {
  let targetAmount = 800000;
  let [coin, setCoin] = useState("shekel");
  function changeCoin() {
    setCoin(coin === "shekel" ? "dollar" : "shekel");
  }
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchExchangeRate = async () => {
      const apiKey = 'f4468869240fb56a993a11bf';
      try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/USD/ILS`);
        const exchangeRate = response.data.conversion_rate;
        setExchangeRate(exchangeRate);
        setLoading(false);
      }
      catch (error) {
        setExchangeRate(3.6)
        console.error('Error fetching exchange rate:', error.message);
        setLoading(false);
      }
    };
    fetchExchangeRate();
  }, []);

  const [mode, setMode] = useState('light');
  const colorMode = useMemo(() => ({
    ToggleColorMode: () => {
      setMode((prevMode) => {
        const newMode = prevMode === 'light' ? 'dark' : 'light';
        return newMode;
      });
    },
  }), []);

  const theme = useMemo(() => createTheme({
    typography: {
      fontFamily: ['"Segoe UI"']
    },
    palette: {
      primary: {
        main: '#f2665e',
        light: "#53a7dd",
        dark: "#891b7f",
        contrastText: "#f6a741",
      },//'#37474f'
      p: '#ffeb3b',
      mode
    },
  }), [mode]);



  const [sumDonate, setsumDonate] = useState(78397);
  const [sumPercent, setsumPercent] = useState();
  const [cntMen, setcntMen] = useState(8);
  const [arrDonation, setArrDonation] = useState([
    {
      firstName: 'chevy', amount: 1200, dedication: 'with love💖💖', dateDonate: new Date(2023, 6, 12)
    },
    {
      firstName: 'pnini', amount: 10000, dedication: 'with love😜😜', dateDonate: new Date(2023, 7, 27)
    },
    {
      firstName: 'שרי', amount: 1857, dedication: 'with love🥰', dateDonate: new Date(2023, 11, 2)
    },
    {
      firstName: 'גיטי', amount: 7000, dedication: 'with love🥰', dateDonate: new Date(2023, 11, 4)
    },
    {
      firstName: 'racheli', amount: 42000, dedication: 'with love🥰', dateDonate: new Date(2023, 11, 17)
    },
    {
      firstName: 'racheli', amount: 460, dedication: 'with love🥰', dateDonate: new Date(2023, 11, 5)
    },
    {
      firstName: 'racheli', amount: 15500, dedication: 'with love🥰', dateDonate: new Date(2023, 7, 9)
    },
    {
      firstName: 'דיצה', amount: 380, dedication: 'להצלחת הקמפיין', dateDonate: new Date(2023, 11, 4)
    }
  ]);


  function calculetePercnt(sumDonate) {
    let number = (sumDonate * 100) / targetAmount;
    return parseFloat(number.toFixed(2));

  }
  const addPeopleToList = (newDonate) => {
    setsumDonate(sumDonate + newDonate.amount);
    setcntMen(cntMen + 1);
    setsumPercent(calculetePercnt(sumDonate))
    let copy = [...arrDonation];
    copy.push(newDonate);
    setArrDonation(copy);
    console.log(copy);
  }
  const changeArr = (arr) => {
    let copy = [...arr];
    setArrDonation(copy)
  }

  useEffect(()=>{}, [sumDonate])
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>

          <Stack sx={{ width: "100%", color: theme.palette.text.primary, bgcolor: theme.palette.background.default }} spacing={2}>
            <NavBar arrDonation={arrDonation} cntMen={cntMen} sumDonate={sumDonate} sumPercent={sumPercent}
              targetAmount={targetAmount} changeCoin={changeCoin} coin={coin} exchangeRate={exchangeRate}
            />
            <header></header>
            <Routes>
              <Route path="Donations" element={<Donations arrDonation={arrDonation} setarrDonation={changeArr} loading={loading} exchangeRate={exchangeRate} coin={coin} setCoin={setCoin} />} />
              <Route path="Steps" element={<Steps addPeopleToList={addPeopleToList} />} />
              <Route path="Home" element={<Home />} />
              <Route path="/" element={<Home />} />
            </Routes>
            {/* <DonationPieChart/> */}
          </Stack>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
