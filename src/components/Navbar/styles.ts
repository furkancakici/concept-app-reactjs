import styled from 'styled-components'
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/globalStyles';

export const Nav = styled.nav`
    background:#101522;
    height: 80px;
    display: flex;
    justify-content:center;
    font-size:1.2rem;
    position:sticky;
    top:0;
    z-index:999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content:space-between;
    height:80px;

    ${Container}
`;


export const NavLogo = styled(Link)`
    display: flex;
    justify-content:flex-start;
    align-items: center;
    color:#fff;
    cursor:pointer;
    text-decoration:none;
    font-size:2rem;
`

export const NavIcon = styled(FaMagento)`
    margin-right:0.5rem;
`


export const MobileIcon = styled.div`
    display:none;

    @media (max-width:960px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%, 60%);
        font-size:1.8rem;
        cursor:pointer;
    }
`;

type Props = {
    click?: boolean
}

export const NavMenu = styled.ul<Props>`
    display: flex;
    align-items:center;
    list-style:none;
    text-align:center;

    @media (max-width:960px){
        display: flex;
        flex-direction:column;
        width:100%;
        height:100vh;
        position:absolute;
        top:80px;
        left: ${({click})  => click ? 0 : '-100%'};
        opacity: 1;
        transition: all 0.5s ease;
        background:#101522;
    }
`;

export const NavItem = styled.li`
    display: flex;
    align-items:center;
    height:80px;
    border-bottom:4px solid transparent;

    &:hover{
        border-bottom:4px solid #4b59f7;
    }

    @media (max-width:960px) {
        &:hover{
            border-bottom:4px solid transparent;
        }
    }
`;


export const NavLinks = styled(Link)`
    color:#fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem;
    height: 100%;


    @media (max-width:960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        flex-direction:columns;

            &:hover{
                color:#4b59f7;
                transition: all 0.3s ease;
            }
    }
`;

export const NavItemBtn = styled.li`
    @media (max-width:960px){
        display: flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:120px;
    }
`;


export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    padding:8px 16px;
    height:100%;
    border:none;
    outline:none;
`

