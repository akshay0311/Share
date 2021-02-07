import React from 'react'
import {Paper, makeStyles, TextField, Grid, Button, Avatar} from "@material-ui/core";
import {ThumbUp, Chat,Share} from "@material-ui/icons";
import ThumbOutline from "./images/thumb_outline.svg";
const useStyles = makeStyles((theme)=>({
    root1 : {
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        color: "grey"
    },
    root2 : {
        padding : theme.spacing(1),
        paddingTop: theme.spacing(2),
        display: "flex",
        borderTop : "1px solid lightGrey"
    },
    like:{
        display : "flex",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(0.5),
        '&:hover': {
            cursor: "pointer",
            background: "#E8E8E8"
        }
    },
    icon : {
        marginTop: theme.spacing(-0.3),
        marginRight: theme.spacing(0.5)
    },
    likeIcon: {
        marginTop: theme.spacing(-0.6),
        marginRight: theme.spacing(0.5)
    },
    comment: {
        display: "flex",
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(0.5),
        '&:hover': {
            cursor: "pointer",
            background: "#E8E8E8"
        }
    },
    share: {
        display : "flex",
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(0.5),
        '&:hover': {
            cursor: "pointer",
            background: "#E8E8E8"
        }
    },
    commentSection: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(1.5)
    },
    textField : {
        width: "100%",
    },
    peopleComments:{
        display:"flex"
    },
    commentedArea: {
        background:"#F0F0F0",
        width: "100%",
        marginLeft: theme.spacing(1),
        padding: theme.spacing(1)
    },
    avatar:{
        marginTop:theme.spacing(1.8),
        width:theme.spacing(4),
        height : theme.spacing(4)
    },
    postButton : {
        float: "right"
    } 
}))
export default function CardContentLikesAndComment({index, likes, clickOnLike,comments,clickOnComment}) {
    const classes = useStyles();
    const [like,setLike] = React.useState(false);
    const [comment,setComment] = React.useState(false);
    const likeButtonClick = () => {
        setLike(!like)
        clickOnLike(index,like)
    }
    const commentButtonClick = () =>{
        setComment(!comment)
        clickOnComment(index,comment)
    }
    return (
        <>
            <Paper elevation={0} className={classes.root1}>
                <span>{likes} likes</span> . 
                <span>{comments.length} comments</span>
            </Paper>
            <Paper elevation={0} className={classes.root2}>
                {like 
                ? <span onClick={likeButtonClick} className={classes.like}><ThumbUp color="primary" className={classes.likeIcon}/><b>Like</b></span> :
                <span onClick={likeButtonClick}  className={classes.like}><img src={ThumbOutline} className={classes.likeIcon}/><b>Like</b>
                </span>}
                <span className={classes.comment} onClick={commentButtonClick}><Chat className={classes.icon}/><b>Comment</b></span>
                <span  className={classes.share}><Share className={classes.icon}/><b>Share</b></span>
            </Paper>
        </>    
    )
}

export function CommmentSection({index,comments, postComment}) {
    const classes = useStyles();
    const [comment,setComment] = React.useState('');
    return (
        <Grid container spacing={0} className={classes.commentSection}>
            <Grid item xs={1}>
                <Avatar className={classes.avatar}/>
            </Grid>
            <Grid item xs={11}>
                <Paper elevation={0}>
                    <TextField 
                    label="Add Comment" 
                    inputProps = {{
                        className:classes.textField,
                    }}
                    className={classes.textField}
                    onChange={(e)=>setComment(e.target.value)}/>
                </Paper>
                <br/>
                {
                    comment.length > 0 && <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.postButton}
                    onClick={()=>postComment(index,comment)}>Post</Button>
                }
                <br/>
                <br/>
                <b>Comments</b>
                <br/>
                <br/>
                {
                    comments.length > 0 && comments.map((c)=>(
                        <>
                            <div className={classes.peopleComments}>
                                <Avatar className={classes.avatar}/>
                                <Paper elevation={0} className={classes.commentedArea}>
                                    <b>{c.from}</b>
                                    <br/>
                                    <br/>
                                    <span>{c.comment}</span>
                                </Paper>
                            </div>
                            <br/>
                        </>
                    ))
                }
            </Grid>
        </Grid>
    )
}
