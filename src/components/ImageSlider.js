import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function ImageSlider() {

    let setting={
        dots : true,
        infinite : true,
        speed : 500,
        slidesToShow : 1,
        SlidesToScroll : 1,
        autoplay : true,
    }
    return (
        <Carousel {...setting}>
            <Wrap>
                <a>
                    <img src="/images/slider-badging.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>    
                <a>
                    <img src="/images/slider-scale.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src="/images/slider-badag.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src="/images/slider-scales.jpg" alt="" />
                </a>
            </Wrap>

        </Carousel>
    )
}

export default ImageSlider;

const Carousel = styled(Slider)`
    margin-top: 20px;
    //overflow: hidden;
    ul li button {
        &:before{
            font-size: 10px;
            color : rgba(150,158,171);
        }
    }
    li.slick-active button::before{
        color : #fff;
    }
    .slick-list{
        overflow:visible;
    }  
    button{
        z-index : 1;
    }
`;

const Wrap = styled.div`
    img{
        border : 4px solid transparent;
        border-radius: 4px;
        width:100%;
        height:100%;
        box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px --10px, rgba(0 0 0 / 73%) 0px 10px 10px -10px;
        transition-duration : 4s;
    }
    &:hover{
        border: 1px solid #fff;
    }

`;