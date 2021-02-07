import React from 'react'
import {Grid,CardContent, makeStyles} from "@material-ui/core";
import CustomCard from "../components/CustomCard";
const useStyles = makeStyles((theme)=>({
    root : {},
    gridItem : {
        paddingLeft : theme.spacing(4)
    }
}))
export default function Contacts(props) {
    const [contacts, setContacts] = React.useState([
        {   id : 1,
            name: "Naman Singh",
            dp : "",
            relation : "friend",
            chose: false 
        },
        {   id : 2,
            name: "Pawan Chauhan",
            dp : "",
            relation : "friend",
            chose: false    
        },
        {   id : 3,
            name: "Shubham Sharma",
            dp : "",
            relation : "friend",
            chose: false
        },{ id : 4,
            name: "Akshat Mishra",
            dp : "",
            relation : "brother",
            chose: false
        },
        {   id : 5,
            name: "Akshat Mishra",
            dp : "",
            relation : "brother",
            chose: false
        },
        {   id : 6,
            name: "Akshat Mishra",
            dp : "",
            relation : "brother",
            chose: false
        }
    ])
    const classes = useStyles();
    React.useEffect(()=>{
        props.changePath(props.pathName)
    })
    return (
        <Grid container spacing={0} className={classes.root}>
        {
            contacts.map((contact)=>(
                <Grid item xs={3} className={classes.gridItem}>
                    <CustomCard
                    id = {contact.id}
                    title={contact.name}
                    chose = {contact.chose}
                    position="relative"
                    height={300} 
                    avatarWidth={11}
                    avatarHeight={11}
                    headerPadding={7.5} 
                    cardClick={false}
                    content={<CardContent/>}
                    />
                    <br/>
                </Grid>       
            ))
        }
    </Grid>
    )
}
