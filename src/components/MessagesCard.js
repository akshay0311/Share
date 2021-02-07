import React from 'react'
import {Card, CardHeader, CardContent,CardActions, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider,Typography, makeStyles, Paper} from "@material-ui/core";
import {ArrowDropDown} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginLeft: theme.spacing(-2),
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    card: {
        position: "-webkit-sticky",
        position: "sticky",
        top: 0
    },
    cardHeader: {
        borderBottom : "1px solid lightGrey",
        paddingLeft : theme.spacing(3.5)
    },
    cardActions: {
        width: "100%",
        margin: "0px",
        paddingLeft:theme.spacing(14),
        color: "#0051A2",
        '&:hover': {
            background: "lightBlue",
            cursor: "pointer"
        }
    },
    avatar:{
        background: "#4995E1"
    }
  }));

export default function BookMarksCard({title,conversations,notifications}) {
    const classes = useStyles();
    let data;
    if (conversations)
         data = conversations.slice(0,3);
    else 
        data = notifications.slice();     
    return (
        <Card className = {classes.card}>
             <CardHeader
             title = {title}
             className = {classes.cardHeader}
             />
              <CardContent>
                  {
                    data.map((d,index) => (
                        <List className={classes.root}>
                            {index !== 0 && conversations &&   
                                <Divider variant="inset" component="li" />
                            }
                            {
                                index !== 0 && notifications && 
                                <Divider/>
                            }
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                <Avatar alt={d.from} src="/static/images/avatar/1.jpg" className={classes.avatar}/>
                                </ListItemAvatar>
                                <ListItemText
                                primary={d.subject && d.subject}
                                secondary={
                                    <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {d.from && d.from}: 
                                    </Typography>
                                    {d.content}
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                        </List>))
                    }
                </CardContent>
                <Divider/>
                {
                    conversations && 
                    <CardActions className={classes.cardActions}>
                        All messages
                    </CardActions>  
                }
        </Card>
    )
}
