import React from 'react'
import {Grid,Paper,AppBar,makeStyles,Toolbar,InputBase,Avatar,Button,Menu,MenuItem} from '@material-ui/core';
import {Search,Home,Notifications,Contacts,Info,ArrowDropDown} from "@material-ui/icons";
import {Link} from "react-router-dom";
import Logo from "./images/logo3.png";

const useStyles = makeStyles((theme)=>(
    {
        root:{
          background: "white",
          position: "-webkit-sticky",
          position:"sticky",
          top: 0
        },
        logo : {
            width: "50px",
            paddingLeft : theme.spacing(6),
            marginTop: theme.spacing(0.7)
        },
        logoName:{
            color:"#0051A2",
            fontSize: "25px",
            paddingTop: theme.spacing(2),
            fontFamily:"Original Surfer"
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            marginTop: theme.spacing(1),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
              width: '20ch',
            },
            border: "1px solid lightGrey",
            borderRadius:"5px",
          },
          searchIcon: {
            padding: theme.spacing(0, 2),
            position: 'absolute',
            top : theme.spacing(2.5),
            display: 'flex',
            color:"darkGrey"
          },
          links:{
              display:"flex",
              paddingTop:theme.spacing(0.8)
          },
          Link : {
            textDecoration: "none"
        },
          link:{
            display:"flex",
            flexDirection:"column",
            alignItem:"center",
            color:"grey",
            marginRight:theme.spacing(5),
          },
          activeLink: {
            display:"flex",
            flexDirection:"column",
            alignItem:"center",
            color:"black",
            marginRight:theme.spacing(5),
          },
          linkName: {
                marginLeft:theme.spacing(-0.8),
                marginTop:theme.spacing(0.5),
                fontSize: "14px"
          },
          avatar:{
              width:theme.spacing(3),
              height:theme.spacing(3),
              background: "#0051A2"
          },
          avatarLink:{
              display:"flex"
          },
          arrowdropdown:{
            marginLeft:theme.spacing(-0.5)
          },
          menu:{
              marginTop:theme.spacing(4)
          },
    }
))

export default function NavBar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container>
                <Grid item xs={1}>
                    <img src={Logo} className={classes.logo}/>
                </Grid>
                <Grid item xs={1} className={classes.logoName}>
                    <span>Share</span>
                </Grid>
                <Grid item xs={5}>
                    <div className={classes.searchIcon}>
                        <Search/>
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        input: classes.inputInput,
                    }}
                    />
                </Grid>
                <Grid item xs={5} className={classes.links}>
                    <Link to = "/" className={classes.Link}>
                        { props.path === "/home" ? 
                            <div className={classes.activeLink}>
                                <Home/>
                                <span className={classes.linkName}>Home</span>
                            </div> : 
                            <div className={classes.link}>
                                <Home/>
                            <span className={classes.linkName}>Home</span>
                        </div>  
                        } 
                    </Link>    
                    <Link to = "/notifications" className={classes.Link}>
                        {
                            props.path === "/notifications" ? 
                            <div className={classes.activeLink}>
                                <Notifications/>
                                <span className={classes.linkName}>Notifications</span>
                            </div>
                            :
                            <div className={classes.link}>
                                <Notifications/>
                                <span className={classes.linkName}>Notifications</span>
                            </div>
                        }
                    </Link>   
                    <Link to = "/contacts" className={classes.Link}>
                        {
                            props.path === "/contacts" ? 
                            <div className={classes.activeLink}>
                                <Contacts/>
                                <span className={classes.linkName}>Contacts</span>
                            </div>
                            :
                            <div className={classes.link}>
                                <Contacts/>
                                <span className={classes.linkName}>Contacts</span>
                            </div>
                        }
                    </Link>
                    <Link to= "/about" className={classes.Link} >
                        <div className={classes.link}>
                            <Info/>
                            <span className={classes.linkName}>About us</span>
                        </div>  
                    </Link>
                    <div className={classes.link}>
                        <Avatar className={classes.avatar}/>
                        <div className={classes.avatarLink}>
                            <span className={classes.linkName}>Me</span>
                            <span className={classes.arrowdropdown}><ArrowDropDown onClick={handleClick}/></span>
                        </div>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            className={classes.menu}
                            >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>  
                </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
