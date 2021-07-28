import React from 'react';
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";

function Home() {
    return (
        <HomeContainer>
            <ImageSlider />
            <Viewers />
            <Movies />
        </HomeContainer>
    )
}

export default Home;

const HomeContainer = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw  + 5px);
    overflow-x: hidden;
    position: relative;
    ::before{
        background: url("/images/home-background.png") center center ;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: fixed;
        content : '';
        position: absolute;
        top  : 0;
        left : 0;
        right : 0;
        bottom :0;
        z-index:-1;
    }
`;