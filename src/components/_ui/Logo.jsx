import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const LogoLink = styled(Link)`
    outline: none;
    position: relative;
    display: inline-block;
    text-decoration: none;
    font-size: 1.875em;
    text-transform: uppercase;
    font-weight: 900;
    overflow: hidden;
    line-height: 0.75;
    color: #c5c2b8;
    background: black;
    padding: 0.4em;
    color: white;
    border: 2px solid black;

    &:before {
        content: 'EVT';
        position: absolute;
        z-index: 2;
        overflow: hidden;
        color: black;
        white-space: nowrap;
        width: 0%;
        transition: width 0.4s 0.3s;
    }
    
    &:after {
        content: '';
        position: absolute;
        height: 8px;
        width: 100%;
        top: 50%;
        margin-top: -2px;
        right: 2px;
        background: white;
        transform: translate3d(-100%,0,0);
        transition: transform 0.4s;
        transition-timing-function: cubic-bezier(0.7,0,0.3,1);
    }

    &:active,
    &:hover {
        background: white;

        &:before {
            width: 100%;
        }

        &:after {
            background: black;
            transform: translate3d(100%,0,0);
        }
    }
`

const Logo = () => (
    <LogoLink to="/">
        EVT
    </LogoLink>
    
);

export default Logo;
