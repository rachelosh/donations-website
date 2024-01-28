import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
const OneDonate = (props) => {
    let today = () => {
        let t = new Date();
        let timeDifference = t.getTime() - props.donate.dateDonate.getTime();
        let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hoursDifference = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        if (daysDifference !== 0) {
            return `לפני ${daysDifference} ימים`;
        } else if (hoursDifference !== 0) {
            return `לפני ${hoursDifference} שעות`;
        } else {
            return `לפני ${minutesDifference} דקות`;
        }
    }


    return (
        <>
            <Card sx={{ minWidth: 300 }}>
                <CardContent>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    </Typography>
                    <Typography variant="h5" component="div">
                        {props.donate.firstName}
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    </Typography>
                    <Typography variant="h5" component="div" style={{ color: 'grey' }}>
                        {
                            props.loading ? 'טוען...' : props.coin === 'shekel' ? `${((props.donate.amount).toFixed(0)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ₪` :
                                `${((Number(props.donate.amount) / props.exchangeRate).toFixed(0)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $`
                        }

                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {today()}
                    </Typography>
                    <Typography variant="body2">
                        {props.donate.dedication}


                    </Typography>
                </CardContent>

            </Card>
        </>
    );
}

export default OneDonate;