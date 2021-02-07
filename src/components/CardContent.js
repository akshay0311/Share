import React from 'react'
import {Card,CardHeader,CardContent,CardMedia,CardActions,Avatar,makeStyles} from "@material-ui/core";
import LikesAndComment, {CommmentSection} from "./CardContentLikesAndComment";
const useStyles = makeStyles((theme)=>({
    root:{
        maxWidth:500,
        padding: theme.spacing(1),
    },
    avatar:{
        marginTop: theme.spacing(-2),
        marginLeft: theme.spacing(-1.5),
        background: "#4995E1"
    },
    cardHeaderTitle:{
        marginTop: theme.spacing(-3),
    },
    cardHeaderTitleName:{
        marginBottom:theme.spacing(-2),
        display:"flex"
    },
    cardHeaderTitleId:{
        fontSize:"13px",
        marginTop: theme.spacing(0.4),
        color:"grey",
        marginLeft: theme.spacing(1)
    },
    cardContent:{
        marginTop:theme.spacing(-3)
    }
}))        
export default function ContentCard({cardDetails}) {
    const classes = useStyles();
    const [cardInfo,setCardInfo] = cardDetails;
    const clickOnLike = (index,liked) => {
        const newArr = [...cardInfo];
        if (liked)
            newArr[index].likes-=1;
        else
            newArr[index].likes+=1;
        
        setCardInfo(newArr)
    }

    const clickOnComment = (index, triggerComment) => {
        const newArr = [...cardInfo];
        newArr[index].triggerComment = !triggerComment
        setCardInfo(newArr)
    }

    const postComment = (index,comment) => {
        const newArr = [...cardInfo];
        const a = {from: "Akshay Mishra", comment: comment}
        newArr[index].comments.push(a);
        setCardInfo(newArr);
    }
    return (<>
        {
        cardInfo.map((c,index)=>(
        <>    
        <Card className={classes.root}>
            <CardHeader
                title={
                    <div className={classes.cardHeaderTitle}>
                        <h3 className={classes.cardHeaderTitleName}>{c.name}
                            <i className={classes.cardHeaderTitleId}>{c.id}</i>
                        </h3>
                        <p>{c.postedTime} ago</p>
                    </div>
                }
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {c.name[0]}
                    </Avatar>}>
            </CardHeader>
            <CardContent className={classes.cardContent}>
                { c.imageUrl && 
                    <>
                        <img src={c.imageUrl} width="100%" style={{borderRadius:"5px"}}/>
                        <br/>
                        <br/>
                    </>
                }        
                {c.post}
                <br/>
                <a href={c.link}>{c.link}</a>
            </CardContent>
            <LikesAndComment index= {index} likes={c.likes} clickOnLike={clickOnLike}  comments={c.comments} clickOnComment= {clickOnComment}/>
            {
                c.triggerComment && <CommmentSection index = {index} comments={c.comments} postComment={postComment}/>
            }
        </Card>
        <br/>
        </>
        ))
    }
    </>
    )
}
