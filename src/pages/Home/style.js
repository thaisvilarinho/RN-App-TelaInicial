import styled from 'styled-components/native';
import React from 'react';

export const Container = styled.View`
    flex: 1;
    background-color: green;
`;

export const Background = styled.ImageBackground`
    flex: 1;
    justify-content: flex-end;
`;

export const Footer = styled.View`
    height: 230px;
    padding: 25px;
    justify-content: space-around;
`;

export const Title = styled.Text`
    color: #ffffff;
    font-size: 40px;
    font-weight: bold;
`;

export const Description = styled.Text`
    color: #ffffff;
    font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #7c4759;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: 12px;
`;

export const TitleButton = styled.Text`
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
`;
