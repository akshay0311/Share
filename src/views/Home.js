import React from 'react'
import CardLeft from "../components/CustomCard";
import AddContentCard from "../components/AddContentCard";
import CardContent from "../components/CardContent";
import BookMarksCard from "../components/MessagesCard";
import {Grid,makeStyles,Button} from "@material-ui/core";
import HomePageDialogs from './HomePageDialogs';


const useStyles = makeStyles((theme)=>({
    left:{
        paddingTop: theme.spacing(5),
        paddingLeft: theme.spacing(12),
        paddingRight: theme.spacing(5),
    },
    center: {
        paddingTop: theme.spacing(5),
        marginLeft:theme.spacing(-10)
    },
    right: {
        paddingTop: theme.spacing(5)
    },
    leftCardContent:{
        fontSize: "15px",
        fontWeight: 600,
        lineHeight: "16px",
        color: "rgba(0,0,0,0.6)",
        fontFamily: "system-ui"
    },
    button: {
        borderRadius:"10px",
        marginTop: theme.spacing(2),
        '&:hover':{
            background: "blue",
            color:"white",
            transform: "scale(1.1)"
        },
        fontSize: "12px",
    },
    shares:{
        color:"#0A66C2"
    },
    importants: {
        color: "#0A66C2"
    },
    ignores: {
        color: "#0A66C2"
    }
}))

export default function Home(props) {
    const classes = useStyles();
    const [open,setOpen] = React.useState(false);
    React.useEffect(()=>{
        props.changePath(props.pathName)
    })
    const [cardInfo, setCardInfo] = React.useState([
        {
            name: "Naman Singh",
            postedTime: "2h",
            id: "@Namu",
            post:`This is Jonny Kim. He is 36 years old
            He has achieved becoming a trained Harvard University Medical Doctor, a Navy Seal lieutenant (awarded Silver Star), and is now selected by NASA to become the first Korean American to go to space!
            He is also a father of 3 adorable children 
            Jonny is one of these 𝘁𝗿𝘂𝗹𝘆 𝗶𝗻𝘀𝗽𝗶𝗿𝗶𝗻𝗴 𝗽𝗲𝗼𝗽𝗹𝗲 who remind you 
            that the only limits are the ones we set in our own minds!`,
            likes : 0,
            triggerComment : false,
            comments : [],
        },
        {
            name: "Pawan Chauhan",
            postedTime: "1h",
            id: "@Paki",
            imageUrl: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iCLeps5rkgNk/v1/1000x-1.jpg",
            post: "What a match!!Ronaldo played really well.Go Ronaldo",
            likes : 0,
            triggerComment : false,
            comments : [
                {
                    comment : "Love you Ronaldo",
                    from : "Shikha Tiwari"
                },
                {
                    comment : "Love you Ronaldo",
                    from : "Shikha Tiwari"
                }
            ],
        },
        {
            name: "Akshat Mishra",
            postedTime: "5mins",
            id: "@Vashu",
            post: `Hey, guys recently watched Boruto.Fight between Momoshiki and (Naruto and Sasuke) was amazing.Literally got chilled down my
                 my spine.Must watch.Link is below.`,
            link:`https://www.youtube.com/watch?v=yOKXBDH0ykQ&ab_channel=BorutoShippuden`,
            likes : 0,
            triggerComment : false,
            comments : [],
        }
    ])

    const [conversations,setConversation] = React.useState([
        {
            subject: "Bring fruits from the market",
            from: "Naman Sah",
            content: "While coming from office please bring the fruit basket"
        },
        {
            subject: "Watched Boruto",
            from: "Akshat Mishra",
            content: "Bro!! Just Watched Boruto...Awesome"
        },
        {
            subject: "Will be late!!",
            from: "Devendra Mishra",
            content: "I will come late.At Mahaparishad"
        },
        {
            subject: "Bring fruits from the market",
            from: "Naman Sah",
            content: "While coming from office please bring the fruit basket"
        }
    ])
    const handleClickOpen = () => {
        setOpen(true);
    };

    function LeftCardContent() {
        return (<Grid container className={classes.leftCardContent}>
            <Grid item xs={8}>No. of shares:</Grid><Grid item xs={4} className={classes.shares}>14</Grid><br/><br/>
            <Grid item xs= {8}>No. of importants:</Grid><Grid item xs={4} className={classes.importants}>10</Grid><br/><br/>
            <Grid item xs={8}>No. of ignores:</Grid><Grid item xs={4} className={classes.ignores}>6</Grid><br/><br/>
            <Button variant="outlined" color="primary" className={classes.button}>Profile</Button>
        </Grid>)
    }
    return (
        <Grid container>
            <Grid item xs={4} className={classes.left}>
                <CardLeft title="Akshay Mishra" content={<LeftCardContent/>}/>
            </Grid>
            <Grid item xs={5} className={classes.center}>
                <AddContentCard handleClickOpen={handleClickOpen}/>
                <HomePageDialogs triggerDialog={[open,setOpen]}/>
                <br/>
                <CardContent cardDetails={[cardInfo,setCardInfo]}/>
            </Grid>
            <Grid item xs={3} className={classes.right} >
                <BookMarksCard title = "Important Messages" conversations={conversations}/>
            </Grid>
        </Grid>
    )
}



