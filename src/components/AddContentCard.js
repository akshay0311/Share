import React, {useState} from 'react'
import {Card, CardContent, makeStyles,TextField} from "@material-ui/core";
import {PhotoSizeSelectActual,Description,Event,Note} from '@material-ui/icons';
const useStyles = makeStyles((theme)=>({
    root:{
        maxWidth:500,
        height: 100,
        padding: theme.spacing(1),
    },
    textField: {
        width: 500,
        borderRadius:"10px",
        '&:hover':{
            background:"#F0F0F0",
            cursor: "pointer"
        },
    },
    cardContent:{
        display:"flex"
    },
    contentContent:{
        display: "flex",
        marginRight: theme.spacing(8)
    },
    label:{
        marginTop:theme.spacing(0.5),
        marginLeft:theme.spacing(1)
    },
    event:{
        color:"green"
    }
}))


export default function AddContentCard({handleClickOpen}) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <TextField 
            id="outlined-basic" 
            label="Start a post" 
            variant="outlined" 
            InputProps={{
                startAdornment: <Note/>
              }}
            className={classes.textField} 
            onClick={handleClickOpen}
            disabled/>
            <CardContent className={classes.cardContent}>
                <div className={classes.contentContent}>
                    <PhotoSizeSelectActual color="primary"/>
                    <span className={classes.label}>Photos</span>
                </div>
                <div className={classes.contentContent}>
                    <Description color="secondary"/>
                    <span className={classes.label}>Write a note</span>
                </div>
                <div className={classes.contentContent}>
                    <Event className={classes.event}/>
                    <span className={classes.label}>Event</span>
                </div>
            </CardContent>
        </Card>
    )
}
