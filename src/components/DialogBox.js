import React from 'react'
import {Dialog,DialogTitle,DialogContent,DialogActions,Paper,Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    root:{
    },
    dialogTitle:{
        width:props=> props.width && props.width,
        display: props => props.display && "flex",
        borderBottom:"1px solid grey"
    },
    clear: {
        float: "right",
        position: 'relative',
        top: theme.spacing(0.6)
    },
    dialogContent:{
        background:props=> props.dialogContentColor && "#F0F0F0"
    },
}))

export default function DialogBox({open,handleClose,dialogTitle,dialogContent,dialogAction,fullWidth,chosen}) {
    const classes = useStyles();

    return (
        <div>
            <Dialog 
            open={open}
            onClose={handleClose}
            fullWidth={fullWidth}
            maxWidth = {'md'}>
            <DialogTitle className={classes.dialogTitle}>
                {dialogTitle}
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                {dialogContent}
            </DialogContent>
            {
                chosen  &&
                <DialogActions>
                    <Paper>
                        {dialogAction}
                    </Paper>
                </DialogActions>
            }
            </Dialog>           
        </div>
    )
}
