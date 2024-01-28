import ImageCarousel from "./ImageCarousel";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/700.css';
import { useTheme } from '@mui/material/styles';
const Home = () => {
    const theme = useTheme();
    return (
        <>
            <h1 style={{ textAlign: 'center', color: theme.palette.primary.main }}>הכירו את שלוה</h1>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    '& > :not(style)': {
                        m: 1,
                        width: '95%',
                        height: '450px',
                        marginRight: 'auto', marginLeft: 'auto'

                    },
                }}
            >
                <Paper elevation={3}>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        padding: '20px'
                    }}>
                        <div style={{ flex: 1 }}>
                            <p style={{ direction: 'rtl', marginRight: '20px' }}>
                                ארגון שלוה נוסד בשנת 1990, כחלום פרטי של משפחה אחת בה נולד וגדל יוסי סמואלס,
                                ילד שנולד בריא לחלוטין, והפך בן רגע בעקבות חיסון פגום שקיבל, לחרש, עיוור ועם
                                מוגבלויות מורכבות. הוריו, קלמן ומלכי, האמינו כי משפחות כמו זו שלהן זקוקות לתמיכה
                                של הקהילה באתגרים העצומים הכרוכים בגידול ילדיהן המיוחדים: ממיזם התנדבותי צנוע
                                בדירה שכורה בירושלים, הפך שלוה לארגון מוביל לקידום ושילוב חברתי של אנשים עם
                                מוגבלויות ובני משפחותיהם, מינקות ודרך כל שלבי החיים. חרטנו על דגלנו את השאיפה
                                לשילוב חברתי, ומדי יום, מסביב לשעון, כשאלפי פעוטות, ילדים, בני נוער ומבוגרים
                                נהנים מן השירותים של ארגון שלוה ללא הבדל דת, מין או גזע– אנו מגשימים את החזון, צעד אחר צעד.
                                <br />
                                התוכניות הייחודיות והחדשניות שלנו כוללות את מיטב הטיפולים המשלימים, תרפיות
                                בספורט, אמנות, מוסיקה, רכישת כישורי חיים, פעילויות פנאי וכיף לילדים ולמשפחות,
                                הכשרה והכנה לעולם העבודה, תמיכה והעצמה בבוגרים עם מוגבלויות בדיור עצמאי,
                                בהתנדבות לצה"ל ולשירות הלאומי. כל תוכנית מותאמת לילדים ולמשפחות הבאים
                                בשערינו, ונוצרה בשיתוף פעולה של צוות שלוה ושל מומחים מקצועיים מן השורה
                                בשערינו, ונוצרה בשיתוף פעולה של צוות שלוה ושל מומחים מקצועיים מן השורה
                                בחדשנות בתחומי החינוך והטיפול לכלל אוכלוסיית האנשים עם המוגבלויות.
                                <br />
                                במהלך השנים שלוה התכבדה בפרסים שונים, וזכתה בהכרה ממשלתית בכל אחת
                                מהתכניות שלה. בנוסף, התקנות הניהוליות של שלוה ממשיכות לזכות בציון
                                לשבח במדד ISO 9001/2008 ובתו מידות על אפקטיביות יוצאת דופן.
                            </p>
                        </div>
                        <ImageCarousel />
                    </div>
                </Paper>
            </Box>
        </>

    );
}

export default Home;
