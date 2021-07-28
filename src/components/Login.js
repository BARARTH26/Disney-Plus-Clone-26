import React from 'react';
import styled from "styled-components";


function Login() {
    return (
        <Container>
            <Content>
                <CTA>
                    <SignUp>GET ALL THERE</SignUp>
                    <CtaLogoOne src="images/cta-logo-two.png" alt="" />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    background: url("./images/login");
`;
const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction : column;
    padding: 80px 40px;
    height : 100%;
`;
const BgImage = styled.div`
    height: 100%;
    width:100%;
    background: url("/images/login-background.jpg");
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    right :0;
    z-index : -1;
`;

const CTA = styled.div`
    margin-bottom: 2vw;
    max-width : 660px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
`;
const CtaLogoOne = styled.img`
    margin-bottom : 12px;
    max-width: 660px;
    min-height: 1px;
    display: block;
    width:100%;
`;

const SignUp = styled.a`
    font-weight: bold;
    color : #f9f9f9;
    background-color: #0063e5;
    

`;
export default Login
