import React from 'react'
import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon, InlineIcon } from '@iconify/react';
import { faGithub, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import linkedinSquare from '@iconify-icons/fa/linkedin-square';


const StyeledCol = styled(Col)`
    @media (max-width: 768px) {
        margin-bottom:32px;
    }
`;

const StyledIcon = styled(FontAwesomeIcon)`
    width: 16px !important; 
    height: 16px; 
    margin: 7px 7px 0 7px;
    display: inline-block;
`;

const StyledIconInline = styled(Icon)`
    width: 16px !important; 
    height: 16px; 
    margin: 7px 7px 0 7px;
    display: inline-block;
`;

const StyledFooter = styled.footer`
text-align: center;
    clear: both;
    width: 100%;
    margin: 60px 0 0;
    padding: 30px 0;
    font-size: 14px;
    color: #aaa;
    background-color: #343434;
    font-weight: 300;
    flex-shrink: 0;
`;

const footer = () => {
    return (
        <div>
            <StyledFooter>

            <StyeledCol md={3} mx={3}>

                <Col>
            <span>Copyright &copy; {new Date().getFullYear()}. Made with ❤️ by Hilder Arrieta</span>
            <div>
                    <a className="contact" href="https://github.com/matlab98" target="_blank">
                        <StyledIcon icon={faGithub} style={{ color: "white" }} />
                    </a>
                    <a className="contact" href="https://www.instagram.com/hilbrakaku/" target="_blank" id="profile-link">
                        <StyledIcon icon={faInstagram} style={{ color: "white" }} />
                    </a>
                    <a className="contact" href="https://www.facebook.com/Hildera/" target="_blank">
                        <StyledIcon icon={faFacebook} style={{ color: "white" }} />
                    </a>
                    <a className="contact" href="https://co.linkedin.com/in/hilbra-kaku" target="_blank">
                        <StyledIconInline icon={linkedinSquare} style={{ color: "white" }} />
                    </a>
                    <a className="contact" href="https://twitter.com/HilbraKaku" target="_blank">
                        <StyledIcon icon={faTwitter} style={{ color: "white" }} />
                    </a>
                    </div>
                </Col>
            </StyeledCol>

            </StyledFooter>
            
        </div>
    )
}

export default footer;