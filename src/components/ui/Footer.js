import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets//instagram.svg'

const useStlyes = makeStyles(theme => ({
    footer:{
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    adornment: {
        width: "25em",
        werticalAlign: "bottom",
        [theme.breakpoints.down("md")]:{
            width: "21em"
        },
        [theme.breakpoints.down("xs")]:{
            width: "15em"
        }
    },
    mainContainer: {
        position: "absolute"
    },
    link:{ 
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem: {
        margin: "3em"
    },
    icon:{
        height:"4em",
        width: "4em",
        [theme.breakpoints.down("xs")]:{
            width: "2.5em",
            height: "2.5em"
        }
    },
    socialContainer:{
        position:"absolute",
        marginTop:"-6em",
        right:"1.5emm",
        [theme.breakpoints.down("xs")]:{
            right: "0.6em"
        }
    }
}));

export default function Footer(props){
    const classes = useStlyes();

    return(
        <footer className={classes.footer}>
          <Hidden mdDown>
            <Grid container justify="center" className={classes.mainContainer}>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} onClick={()=>props.setValue(0)} to="/" className={classes.link}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/services" onClick={()=>{props.setValue(1);props.setSelectedIndex(0)}} className={classes.link}>
                            Services
                        </Grid>
                        <Grid item component={Link} to="/customsoftware" onClick={()=>{props.setValue(1);props.setSelectedIndex(1)}} className={classes.link}>
                            Custom Software Development
                        </Grid>
                        <Grid item component={Link} to="/mobileapps" className={classes.link}  onClick={()=>{props.setValue(1);props.setSelectedIndex(2)}}>
                            Mobile App Development
                        </Grid>
                        <Grid item component={Link} to="/websites" className={classes.link} onClick={()=>{props.setValue(1);props.setSelectedIndex(3)}}>
                            Website Development
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/revolution" onClick={()=>props.setValue(2)} className={classes.link} >
                            The Revolution
                        </Grid>
                        <Grid item className={classes.link} component={Link} onClick={()=>props.setValue(2)} to="/revolution" >
                            Vision
                        </Grid>
                        <Grid item className={classes.link} component={Link} onClick={()=>props.setValue(2)} to="/revolution">
                            Technology
                        </Grid>
                        <Grid item className={classes.link} component={Link} onClick={()=>props.setValue(2)} to="/revolution">
                            Process
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item className={classes.link} onClick={()=>props.setValue(3)} component={Link} to="/about">
                        About Us
                    </Grid>
                    <Grid item className={classes.link} onClick={()=>props.setValue(3)} component={Link} to="/about">
                        History
                    </Grid>
                    <Grid item className={classes.link} onClick={()=>props.setValue(3)} component={Link} to="/about">
                        Team
                    </Grid>     
                </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} onClick={()=>props.setValue(4)}>
                            Contact Us
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
        </Hidden>
            <img
                alt="black decorative slash"
                src={footerAdornment}
                className={classes.adornment}
            />
            <Grid container justify="flex-end" className = {classes.socialContainer} spacing={2}>
                <Grid 
                    item
                    component={"a"}
                    href="http://www.facebook.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    >
                     <img alt="FACEBOOK LOGO" src={facebook} className={classes.icon}/>
                </Grid>
                 <Grid item
                    component={"a"}
                    href="http://www.instagram.com"
                    rel="noopener noreferrer"
                    target="_blank" 
                    >
                     <img alt="Instagram LOGO" src={instagram} className={classes.icon}/>
                  </Grid>
                 <Grid item 
                    component={"a"}
                    href="http://www.twitter.com"
                     rel="noopener noreferrer"
                    target="_blank"
                    >
                     <img alt="twitter LOGO" src={twitter} className={classes.icon}/>
                 </Grid>
            </Grid>
    </footer>
    );
}