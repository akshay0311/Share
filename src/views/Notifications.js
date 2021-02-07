import React from 'react'
import {Grid, Card, CardContent, Divider, makeStyles, CardActions} from "@material-ui/core";
import CardLeft from "../components/CustomCard";
import NotificationCard from "../components/MessagesCard";
const useStyles = makeStyles((theme)=>({
    left:{
        paddingTop: theme.spacing(5),
        paddingLeft: theme.spacing(12),
        paddingRight: theme.spacing(5),
    },
    center: {
        paddingTop: theme.spacing(5),
        marginLeft:theme.spacing(-3 )
    },
    card: {
        height: "200px"
    },
    cardContent: {
        textAlign:"center",
        fontSize: "20px",
        height: "30px",
        fontWeight: 600,
        fontFamily: "system-ui"
    },
    notification:{
        textAlign: "center",
        fontSize: "20px"
    },
    cardActions:{
        background: "linear-gradient(90deg, rgba(245,244,255,1) 0%, rgba(73,149,225,1) 0%, rgba(255,255,255,1) 100%);",
        height: "150px"
    }
}))
export default function Notifications(props) {
    const classes = useStyles();
    const [notifications, setNotifications] = React.useState([{
        subject: "Ajay sent you a message"
    },
    {
     subject: "Amit shared a post"
    }])
    React.useEffect(()=>{
        props.changePath(props.pathName)
    })
    return (
            <Grid container>
                <Grid item xs={4} className={classes.left}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            Your Notifications
                            <Divider/>
                        </CardContent>
                        <CardContent className={classes.cardContent}>
                            You have new notifications
                        </CardContent>
                        <CardActions className={classes.cardActions}></CardActions>
                    </Card>
                </Grid>
                <Grid item xs={5} className={classes.center}>
                    <NotificationCard title = "Notifications" notifications={notifications}/>
                </Grid>
                <Grid item xs={3}>
                </Grid>
            </Grid>
    )
}
