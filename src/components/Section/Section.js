import React from 'react';
import { Fade } from 'react-reveal';
import styled from 'styled-components';

const Section = ({ data }) => {

    // const {img,title,description} = data;
    const title = data?.title.split(" ");

    return (
        <Container bg={data?.img}>
            <ContentWraper>
                <Fade bottom>
                    <Title>{title.slice(0, 2).join(" ")} <br /> {title.slice(2, 4).join(" ")}</Title>
                </Fade>
                <Fade bottom>
                    <Description>{data?.description}</Description>
                </Fade>
                <Fade bottom>
                    <ButtonView>VIEW COLLECTION</ButtonView>
                </Fade>
            </ContentWraper>
        </Container>
    );
};

export default Section;


const Container = styled.div`
    background-image: url(${(props) => props.bg});
    background-position: center;
    background-size: cover;
    bocaground-repeat: no-repeat;

    scroll-snap-align: start;

    height: 100vh;
    padding: 0rem 6.5rem;
    display: flex;
    align-items: center;

    @media (max-width: 668px) {
        padding: 0;
      }
`;
const ContentWraper = styled.div`
    width: 45%;

    @media (max-width: 992px) {
        width: 60%;
      }
    @media (max-width: 668px) {
        width: 90%;
        background: #80808036;
        padding: 1rem 2rem 1.5rem;
        margin: auto;
        
        text-align: center;
      }
`;
const Title = styled.h1`
    color: #222;
    font-style: italic;
    font-size: 50px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.2;

    @media (max-width: 668px) {
        font-size: 22px;
      }
`;
const Description = styled.p`
    line-height: 1.5;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #777;
    letter-spacing: .8px;
    font-weight: 400;

    @media (max-width: 668px) {
        font-size: 12px;
        color: black;
      }
`;
const ButtonView = styled.button`
    margin-top: 20px;
    cursor: pointer;
    padding: 13px 29px;
    color: #fff;
    letter-spacing: .05em;
    border: 2px solid #866e6c;
    background: #866e6c;
    font-size: 14px;
    font-weight: 700;
`;


