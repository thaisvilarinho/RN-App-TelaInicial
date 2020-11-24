import React from 'react';

import foodies from '../../images/sabores.jpg'

import { Container, Title, Background, Footer, Description, Button, TitleButton } from './style';

const Home = () =>{
    return (
        <Container>
            <Background source={foodies}>
                <Footer>
                <Title>SaborMania</Title>
                <Description>
                    Tenha acesso a milhares de receitas de dar água na boca e compartilhe seus dotes culinários!
                </Description>
                <Button>
                    <TitleButton>Conhecer</TitleButton>
                </Button>
                </Footer>
            </Background>
        </Container>
    );
};

export default Home;