import React from "react";
import { Layout, Header, Navigation, Drawer, Content, Badge } from 'react-mdl';
import header from "../../assets/finaldevmatch.png"
function Nav() {
  return (
    <div style={{height: '377px', position: 'relative'}}>
    <Layout style={{backgroundImage: `url(${header})`, position: 'relative', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <Header transparent title="DevMatch" style={{color: 'white'}}>
            <Navigation>
                <a href="/matches"><Badge text="1">Matches</Badge></a>
                <a href="/chat">Chat</a>
                <a href="/myaccount">My Profile</a>
                <a href="/">Sign Out</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/matches">Matches</a>
                <a href="/chat">Chat</a>
                <a href="/myaccount">My Profile</a>
                <a href="/">Sign Out</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
  );
}

export default Nav;