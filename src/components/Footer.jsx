import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import Logo from "components/_ui/Logo";
import favicon from "images/favicon.png"

const FooterContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        max-width: 50px;
    }
`

const FooterAuthor = styled("a")`
    font-size: 0.75em;
    color: ${colors.grey700};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;

     &:hover {
         color: ${colors.blue900};

        .FooterLogo {
            animation-name: rotate;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
    }

    @keyframes rotate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`

const FooterLogo = styled("img")`
    max-width: 30px;
    margin-top: 0.65em;
`

const Footer = () => (
    <FooterContainer>
        <Logo />
        <FooterAuthor href="https://marguerite.io">
            © 2020 — Designed & developed by Erick Teowarang
        </FooterAuthor>
        <FooterLogo src={favicon} alt="Footer Logo" />
    </FooterContainer>
)

export default Footer;
