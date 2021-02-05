import React from "react";
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';


function AddFooter() {
    return (
        <Footer className="main-footer" size="mini">
            <FooterSection type="left" logo="DevMatch">
                <FooterLinkList>
                    <a href="#">Help</a>
                    <a href="#">Privacy & Terms</a>
                </FooterLinkList>
            </FooterSection>
        </Footer>
    );
}

export default AddFooter;