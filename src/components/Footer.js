import React from 'react';
import styled from 'styled-components';


const Footer = styled.footer `
position: center;
left: 0;
height: 50px;
width: 100%;
display: flex;
align-itens: center;
justify-content: center;
background-color: #8793;

`

const FooterItem = styled.p `
text-decoration: none;
font-size: 16px;
color: #000;
font-weight: bold;
bottom: 0;
`

export default function footer() {
    return (
        <React.Fragment>
                <Footer>
                    <FooterItem>Aula com Styled components</FooterItem>
                </Footer>

        </React.Fragment>
        
    )
}