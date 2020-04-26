import React from "react";
import Button from "components/_ui/Button";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import { RichText } from "prismic-reactjs";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

const AboutContainer = styled("div")`
    padding-top: 1em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        flex-flow: row wrap;
        padding-top: 0;
    }
`

const AboutLinkContainer = styled("div")`
    padding-top: 1em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 0;
    }
`

const AboutLink = styled("a")`
    margin-bottom: 1.5em;
    font-weight: 600;
    line-height: 1.9;
    text-decoration: none;
    color: currentColor;

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        opacity: 0;
        transition: all 400ms ease-in-out;
    }

    &:hover {
        span {
            transform: translateX(0px);
            opacity: 1;
            transition: all 150ms ease-in-out;
        }
    }
`

const AboutBio = styled("div")`
    padding-bottom: 3em;
    max-width: 480px;

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding-bottom: 2.5em;
    }
`

const AboutActions = styled("div")`
    padding-top: 1em;
    padding-bottom: 3em;


    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding: 0;
    }
`

const About = ({ bio, socialLinks }) => {
    const rawMarkdown = RichText.asText(bio)

    return (
        <AboutContainer>
            <AboutLinkContainer>
                {socialLinks.map((social, i) => (
                    <AboutLink
                        key={i}
                        href={social.about_link[0].spans[0].data.url}
                        target="_blank" rel="noopener noreferrer">
                        {social.about_link[0].text}
                        <span>&#8594;</span>
                    </AboutLink>
                ))}
            </AboutLinkContainer>
            <AboutBio>
                <ReactMarkdown source={rawMarkdown} />
            </AboutBio>
            <AboutActions>
                <a href="mailto:erick.teowarang@hotmail.com" target="_blank" rel="noopener noreferrer">
                    <Button className="Button--secondary">
                        Email me
                    </Button>
                </a>
            </AboutActions>
        </AboutContainer>
    )
}

export default About;

About.propTypes = {
    bio: PropTypes.array.isRequired,
    socialLinks: PropTypes.array.isRequired,
};