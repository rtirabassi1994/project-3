import React, { Component } from 'react';
// import MainCard from '../components/MainCard';
import { Grid, Cell, ListItem, ListItemContent, ListItemAction, List, Icon, Card, CardTitle, CardText, CardActions } from "react-mdl";
import { Input, Button, InputGroupAddon } from 'reactstrap';
import Nav from '../../components/Nav';

class Matches extends Component {
    render() {
        return(
            <div>
            <Nav />
            <Grid className="contact-grid">
            <Cell col={7}><h2 className="new-matches"><b>NEW MATCHES</b></h2>

                {/* Profile Carousel */}

                <Card shadow={0} style={{ width: '400px', height: '400px', margin: 'auto' }} className="matches-list2">
                    <CardTitle expand style={{ color: '#fff', height: '200px', position: 'relative', backgroundPosition: 'center', backgroundSize: 'cover', background: 'url(https://i0.wp.com/dtxmedia.com/wp-content/uploads/2020/05/hs01-dallas-headshots-photography-1.jpg?fit=1024%2C683&ssl=1) bottom right 15% no-repeat #46B6AC' }}>Wendy Sue</CardTitle>
                    <CardText>
                        <p>Cleveland, OH</p>
                        <p>React Developer | Full-Time</p>
                        <p>Case Western Reserve University</p>
                    </CardText>
                    <CardActions border>
                        <Button colored>View Profile</Button>
                    </CardActions>
                </Card>


            </Cell>


            <Cell col={5}>

                {/* Search for a Match */}

                <div className="flex" style={{ width: '300px', margin: 'auto' }}>
                    <Input placeholder="Find a Match!" />
                    <InputGroupAddon addonType="append">
                        <Button color="secondary">Search</Button>
                    </InputGroupAddon></div>


                {/* List of Matches */}


                <Card className="matches-list" shadow={0} style={{ width: '400px', height: '400px', margin: 'auto' }}>
                    <List  style={{ width: '350px', margin: 'auto' }}>
                        <div className="scroll-matches">
                        <ListItem twoLine classname="job-title1">
                            <ListItemContent avatar="person" subtitle="Job Title">Full Name</ListItemContent>
                            <a href="#"><Icon name="" />View</a>
                        </ListItem>
                        <ListItem twoLine>
                            <ListItemContent avatar="person" subtitle="Job Title">Full Name</ListItemContent>
                            <ListItemAction>
                                <a href="#">View</a>
                            </ListItemAction>
                        </ListItem>
                        <ListItem twoLine>
                            <ListItemContent avatar="person" subtitle="Job Title">Full Name</ListItemContent>
                            <ListItemAction>
                                <a href="#">View</a>
                            </ListItemAction>
                        </ListItem>
                        <ListItem twoLine classname="job-title1">
                            <ListItemContent avatar="person" subtitle="Job Title">Full Name</ListItemContent>
                            <a href="#"><Icon name="" />View</a>
                        </ListItem>
                        <ListItem twoLine>
                            <ListItemContent avatar="person" subtitle="Job Title">Full Name</ListItemContent>
                            <ListItemAction>
                                <a href="#">View</a>
                            </ListItemAction>
                        </ListItem>
                        <ListItem twoLine>
                            <ListItemContent avatar="person" subtitle="Job Title">Full Name</ListItemContent>
                            <ListItemAction>
                                <a href="#">View</a>
                            </ListItemAction>
                        </ListItem>
                        </div>
                    </List> </Card>
            </Cell>
        </Grid>
        </div>
        )
    }
}

export default Matches;