import React from 'react';
import styled from 'styled-components';



const Content = styled.main `
background-color: #559;
display: flex;
justify-content: space-between;
width: 100%;
height: 500px;
flex-diretion: row;
margin: 0 auto;
box-sizing: border-box;

`


const ContentItem = styled.p `
color: #fff;
text-align: center;
font-family:'Read';
width: 250px;
background-color: #500;
padding: 20px;
box-sizing: border-box;
margin: 40px;
`

export default function content() {
    return (
        <React.Fragment>
                <Content>
                   <ContentItem>
                       TEXTO TOTAL DA PÁGINA LOUCAMENTE ESCRITO
                   </ContentItem>
                   <ContentItem>
                       A gente inclusive pode fazer mais de um content
                   </ContentItem>
                </Content>

        </React.Fragment>
        
    )
}