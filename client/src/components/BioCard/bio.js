import React from "react";
import { Card, Button, CardTitle, CardText, CardActions } from "react-mdl";


function BioCard(props) {
    console.log("/components/BioCard/bio.js/line:7: props...");
    console.log(props)
    console.log("/components/BioCard/bio.js/line:7: props^^^");
    return (
        <Card className="Bio" shadow={0} style={{ width: '500px', height: '800px', margin: 'auto' }}>
            <CardTitle expand style={{ color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }}>Derek Thorpe</CardTitle>
            <CardText>
                <h5>Cleveland</h5>
                <h6>React Developer | Full-Time</h6>
                <h6>Case Western Reserve University</h6>
                <Button colored>Download resume here</Button>
                <h6 style={{ textAlign: 'center' }}>Bio</h6>
                <hr></hr>
                <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor leo quam, sit amet venenatis ex pulvinar nec. Curabitur nec lectus ac magna rhoncus luctus. In ac gravida leo. Donec ut dui sollicitudin, suscipit nisl sit amet, gravida nibh. Proin efficitur vulputate erat, non rutrum lacus iaculis aliquet. Nulla nec accumsan eros, vel gravida dui. Pellentesque in orci nec dui laoreet volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum semper quam non lobortis. Pellentesque vel arcu ac lorem volutpat egestas. Maecenas quis placerat arcu, in vehicula enim. Fusce nisl orci, mollis eu ultricies et, feugiat id nunc. Pellentesque id tristique purus. Aliquam erat volutpat. Etiam sed risus dignissim, luctus ligula et, pretium quam. Donec egestas sodales justo, ac interdum metus accumsan id.</p>


            </CardText>
            <CardActions border style={{ display: "flex" }}>
                <Button>Pass</Button>
                <Button style={{ marginLeft: "auto" }}>Save</Button>
            </CardActions>
        </Card>
    );
}

export default BioCard;