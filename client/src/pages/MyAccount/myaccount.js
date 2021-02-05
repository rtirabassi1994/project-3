import React, { Component } from 'react';
import BioCard from '../../components/BioCard';
import {Card, CardTitle, CardText} from 'react-mdl';
import API from '../../utils/API';
import "./index.css";
import Nav from '../../components/Nav'
class MyAccount extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        console.log(props);
        // this.state = {account: props.location.account}
        this.state = { username: "" }
    };
    componentDidMount = () => {
        API.userInfo().then(results => {
            console.log(results.data[0]);
            console.log("THESE ARE THE RESULTS.DATA")
            this.setState({ username: results.data[0].userName })
            console.log(this.state);
            console.log("THIS IS THE STATE!!!!!!!! COMPONENT DID MOUNT")
        })
    };
    
    render() {
        return(
            <div>
                <Nav />
                <div>
                {/* <MainCard user={this.state}/> */}

                <Card shadow={0} style={{ width: '350px', height: '400px', margin: 'auto', paddingTop: '10px', paddingBottom: '10px' }}>
                    <CardTitle expand 
                    style={{ color: '#fff',
                     background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>
                        {this.state.username}
                        </CardTitle>
                    <CardText>
                        <p>Cleveland, OH</p>
                        <p>React Developer | Full-Time</p>
                        <p>Case Western Reserve University</p>
                        {/* <p>{props.username}</p> */}
                        {/* <p>{props.user.password}</p> */}
                    </CardText>
                </Card>


            </div>
                
            </div>
        )
    }
}

export default MyAccount;