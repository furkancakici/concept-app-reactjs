import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Trebuchet MS';
        src: local('Trebuchet MS'), url(../fonts/trebuc.ttf) format('truetype');
    };

    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-family:'Source Sans Pro', sans-serif;
    }
    body{
        min-width:320px;
    }
`


export const Container = styled.div`
    z-index:1;
    width:100%;
    max-width:1300px;
    margin-right:auto;
    margin-left:auto;
    padding-right:50px;
    padding-left:50px;

    @media screen and (max-width:991px){
        padding-right:30px;
        padding-left:30px;
    }
`

type BtnProps = {
    primary?: boolean,
    big?: boolean,
    fontBig?: boolean
}

export const Button = styled.button<BtnProps>`
    border-radius:4px;
    background:${({ primary }) => primary ? '#4B59F7' : '#0467FB'};
    white-space:nowrap;
    padding:${({ big }) => big ? '12px 64px' : '10px 20px'};
    font-size:${({ fontBig }) => fontBig ? '20px' : '16px'};
    color:#fff;
    outline:none;
    border:none;
    cursor:pointer;

    &:hover{
        transition:all 0.3s ease-out;
        background:#fff;
        background:${({ primary }) => primary ? '#0467FB' : '#4B59F7'}; 
    }

    @media (max-width:960px){
        width:100%;
    }
`

export default GlobalStyle;
