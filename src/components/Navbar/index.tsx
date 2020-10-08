import React, { FC, useState, useEffect } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { Nav, NavbarContainer, NavIcon, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from './styles'
import { Button } from '../../styles/globalStyles'
const Navbar: FC = () => {
    const [click, setClick] = useState<boolean>(false);
    const [button, setButton] = useState<boolean>(true)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={closeMobileMenu}>
                            <NavIcon />
                            PUNGAR
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/'>Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services'>Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/products'>Products</NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/sign-up">
                                        <Button primary>SIGN UP</Button>
                                    </NavBtnLink>
                                ) : (
                                        <NavBtnLink to="/sign-up">
                                            <Button onClick={closeMobileMenu} big primary>
                                                SIGN UP
                                            </Button>
                                        </NavBtnLink>
                                    )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
