import React, {useEffect} from 'react'
import DialogBox from "../components/DialogBox";
import {Avatar, Fab, Button, makeStyles, InputBase, Grid, CardContent} from "@material-ui/core";
import {Clear, Public, ArrowDropDown, ArrowBack, Search} from "@material-ui/icons";
import CustomCard from "../components/CustomCard";

const useStyles = makeStyles((theme)=>({
    clear : {
        float: "right",
        marginTop : theme.spacing(0.5)
    },
    textField:{
        height:"250px",
        width:"400px",
        fontSize: "18px",
        color: "grey",
        border: "none",
        resize: "none",
        outline: "none"
    },
    person:{
        display:"flex",
    },
    personName: {
        position:"relative",
        bottom:theme.spacing(3),
        left: theme.spacing(2)
    },
    fab:{
        fontSize:"10px",
        marginLeft: theme.spacing(-0.8),
        height:"30px",
        background:"linear-gradient(90deg, rgba(245,244,255,1) 0%, rgba(73,149,225,1) 0%, rgba(255,255,255,1) 100%);"
    },
    publicIcon:{
        fontSize:"13px",
        marginRight:theme.spacing(0.5)
    },
    title: {
        fontSize: "30px",
        marginLeft:theme.spacing(4)
    },
    arrowBack:{
        fontSize: "30px"
    },
    searchBar: {
        display: "flex",
        float: "right",
        marginLeft : theme.spacing(30)
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
        border: "1px solid grey",
        borderRadius:"5px",
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        position: 'absolute',
        top : theme.spacing(4),
        display: 'flex',
        color:"darkGrey"
      },
      avatar : {
          background:"#4995E1"
      }
}))

function DialogTitleForFeed({handleClose}) {
    const classes = useStyles()
    return (
            <div>
                <span>Add a post</span>
                <Clear className={classes.clear} onClick={handleClose}/>
            </div>
        )
}

function DialogContentForFeed({handleClickOpenContact}){
    const classes = useStyles()
    return (
        <>
          <div className={classes.person}>
                <Avatar className={classes.avatar}>A</Avatar>
                    <h4 className={classes.personName}>Akshay Mishra
                    <br/>
                    <Fab variant="extended" className={classes.fab}  onClick={handleClickOpenContact}>
                        <Public className={classes.publicIcon}/>
                        Everyone
                        <ArrowDropDown/>
                    </Fab>
                    </h4>
            </div>
            <textarea className={classes.textField} placeholder="What  do you want to say..."></textarea>
        </>
    )
}

function DialogTitleForContacts ({handleClose}) {
    const classes = useStyles()
    return (
        <>
            <ArrowBack onClick={handleClose} className={classes.arrowBack}/>
            <span className={classes.title}>People you know</span>
                <div className={classes.searchBar}>
                <div className={classes.searchIcon}>
                    <Search/>
                </div>
                <InputBase
                placeholder="Search people...."
                classes={{
                    input: classes.inputInput,
                }}
                />
                </div> 
        </>
    )
}

function DialogContentForContacts({contactInfo,cardChosen}) {
    const [contacts,setContacts] = contactInfo;
    const [chosen, setChosen] = cardChosen;
    
    const cardClick = (id)=>{
        let newArr = [];
        newArr = [...contacts];
        for (var i = 0; i < contacts.length; i+=1){
            if (contacts[i].id === id){
                newArr[i].chose = !(contacts[i].chose)
            }   
        }
        setContacts(newArr);
        console.log(contacts)
    }

    useEffect(() => {
        for (var i = 0; i < contacts.length; i+=1){
            if (contacts[i].chose === true){
                setChosen(true)
                return
            }
            setChosen(false)    
        }
    })
    return (
        <>
             <Grid container spacing={2}>
                {
                    contacts.map((contact)=>(
                        <Grid item xs={3}>
                            <CustomCard
                            id = {contact.id}
                            title={contact.name}
                            chose = {contact.chose}
                            position="relative"
                            height={300} 
                            avatarWidth={11}
                            avatarHeight={11}
                            headerPadding={7.5} 
                            hover={true}
                            cardClick={cardClick}
                            content={<CardContent/>}
                            />
                        </Grid>       
                    ))
                }
            </Grid>
        </>
    )
}

export default function HomePageDialogs(props) {
    const [open,setOpen] = props.triggerDialog;
    const [open1, setOpen1] = React.useState(false);
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
        }
    ])

    const [chosen, setChosen] = React.useState(false);

    const handleClickOpenContact = () => {
        setOpen1(true);
        setOpen(false)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseContact = () => {
        setOpen1(false);
        setOpen(true)
    };
    return (
        <div>
            <DialogBox
            fullWidth={false}
            width= {400}
            open={open} 
            dialogTitle={<DialogTitleForFeed  handleClose={handleClose} />}
            dialogContent={<DialogContentForFeed handleClickOpenContact={handleClickOpenContact}/>}
            dialogAction={<><Button variant="contained" color="primary">Post</Button></>}
            chosen = {true}/>
            
            <DialogBox
            fullWidth={true}
            open={open1} 
            dialogTitle= {<DialogTitleForContacts handleClose={handleCloseContact} />}
            dialogContent = {<DialogContentForContacts  
                            contactInfo = {[contacts,setContacts]}
                            cardChosen = {[chosen,setChosen]}/>}
            dialogAction={<><Button variant="contained" color="primary">Save</Button></>}                
            chosen = {chosen}/>
        </div>
    )
}
