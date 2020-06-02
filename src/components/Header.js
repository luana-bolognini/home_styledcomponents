import React from 'react';
import styled from 'styled-components';

const Nav = styled.div `
background-color: #f008;
position: relative;
display: flex;
justify-content: space-between;
align-itens: center;
width: 100%;
height: 60px;
`

const Item = styled.p `
font-size: 14px;
font-family: 'Read';
font-weight: bold;
color: #fff;
`


export default function header() {
    return(
        <Nav>
                <Item>Home</Item>
                <Item>Sobre</Item>
                <Item>Contato</Item>

                
        </Nav>
    );
}