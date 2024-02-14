// src/components/StyledComponents.js
import styled from 'styled-components';

export const Container = styled.div`
    width: 900px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 25px;
    box-shadow: 0px 2px 28px -12px #1e3e40;
    border-radius: 5px;
    margin: 0 20px;
`;

export const Title = styled.h1`
    font-size: 54px;
    margin-bottom: 20px;
    color: #4B9A9F;
`;

export const Span = styled.span`
    color: black;
`;

export const QuoteContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Image = styled.img`
    height: 200px;
    border-radius: 50%;
`;

export const QuoteText = styled.p`
    font-size: 24px;
    max-width: 600px;
    text-align: center;
    margin-top: 30px;
`;

export const Button = styled.button`
    padding: 16px 30px;
    margin-top: 40px;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: #4B9A9F;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: #fff;
        color: #4B9A9F;
        border: 1px solid #4B9A9F;
    }
`;
