import React from 'react'
import {Card,CardHeader,CardContent,CardActions,Avatar,makeStyles} from "@material-ui/core";
import { BorderBottom } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
    root:{
        maxWidth:props => props.width ? props.width : 235,
        borderRadius:props => props.radius ? props.radius : "10px",
        border: props => props.chose ? "2px solid red" : "none",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        position: props=> props.position ? props.position: "fixed",
        width:"100%",
        height: props=> props.height,
        '&:hover':{
            transform: props=>props.hover && "scale(0.9)"
        },
        transform: props => props.chose && "scale(0.9)"
    },
    cardTop:{
        height:"50px",
        width:"100%",
        background:"linear-gradient(90deg, rgba(245,244,255,1) 0%, rgba(73,149,225,1) 0%, rgba(255,255,255,1) 100%);"
    },
    cardBottom:{
        width:"100%",
        height:"280px"
    },
    cardHeader:{
        position:"absolute",
        alignItems:"center"
    },
    avatar:{
        width: props=>props.avatarWidth? theme.spacing(props.avatarWidth): theme.spacing(9),
        height: props=>props.avatarHeight? theme.spacing(props.avatarHeight): theme.spacing(9),
        fontSize:props=>"40px",
        background: "#4995E1"
    },
    contentHeader:{
        paddingTop:props=> props.headerPadding? theme.spacing(props.headerPadding) : theme.spacing(6),
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        borderBottom:"1px solid lightGrey"
    },
    contentHeaderName:{
        marginTop: theme.spacing(0.6),
        fontSize: "18px",
        fontWeight:600,
        fontFamily: "system-ui"
    },
    contentContent:{
        textAlign:"left",
        paddingTop: theme.spacing(1)
    }
}))

export default function CustomCard(props) {
    const classes = useStyles(props)
    return (
        <div>
            <Card className={classes.root} onClick={()=>props.cardClick && props.cardClick(props.id)}>    
                <div className={classes.cardTop}></div>
                <div className={classes.cardBottom}>
                    <CardContent className={classes.contentHeader}>
                        <span className={classes.contentHeaderName}>{props.title}</span>
                    </CardContent>
                    <CardContent className={classes.contentContent}>
                        {props.content}
                    </CardContent>
                </div>
                <CardHeader
                    className={classes.cardHeader}
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {props.title.substr(0,1)}
                </Avatar>
                }/>
            </Card>            
        </div>
    )
}
