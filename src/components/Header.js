import React from 'react'
import styled from "styled-components";
import {Avatar} from "@material-ui/core";

function Header() {
    return (
        <HeaderNav>
            <Logo src="images/logo.svg" alt="" />
            <NavMenu>
                <a href="#">
                    <img src="/images/home-icon.svg"/>
                    <span>HOME</span>
                </a>
                <a href="#">
                    <img src="/images/search-icon.svg"/>
                    <span>SEARCH</span>
                </a>
                <a href="#">
                    <img src="/images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                </a>
                <a href="#">
                    <img src="/images/original-icon.svg"/>
                    <span>ORIGINALS</span>
                </a>
                <a href="#">
                    <img src="/images/Movie-icon.svg"/>
                    <span>Movies</span>
                </a>
                <a href="#">
                    <img src="/images/series-icon.svg"/>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <Avatar />
        </HeaderNav>
    )
}

export default Header

const HeaderNav = styled.nav`
    width : 100%;
    height: 70px;
    background-color: #090b13;
    display: flex;
    color : #fff;
    align-items: center;
    //justify-content: space-between;
    padding: 0 36px;
`;
const Logo = styled.img`
    width:80px;
    cursor : pointer;
`;
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    flex:1;
    margin-left:25px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        text-decoration: none;
        color:#fff;
        cursor : pointer;
        img{
            height:25px;
        }
        span{
            font-size: 15px;
            letter-spacing: 1.42px;
            position : relative;
            ::after{
                content : '';
                height : 2px;
                background-color: #fff;
                position: absolute;
                left : 0;
                right : 0;
                bottom : -6px;
                opacity:0;
                transform-origin : left center;
                transform : scaleX(0);
                transition: all 0.5s ease-in;
            }
        }
        :hover{
            span:after{
                transform: scaleX(1);
                opacity:1;
            }
        }
    }
`;

