import { useTheme } from '@mui/material/styles';
const Finish = () => {
    const theme = useTheme();
    return (<>
        <h1 style={{ color: theme.palette.primary.main, textAlign: 'center' }}>תודה על תרומתך!!!</h1>
        <img src="https://media4.giphy.com/media/F0J0uiNS8n0BHSQmDt/200w.gif?cid=6c09b952nanw6m6neox5ibfz44ss6jcgh4o1lr4xypvpk3ax&ep=v1_gifs_search&rid=200w.gif&ct=g" style={{ width: '50%', marginRight: '25%' }} alt='thank you!!' />
    </>);
}

export default Finish;