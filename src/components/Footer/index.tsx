import React, { FC } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Button } from '../../styles/globalStyles'
import {
    FooterContainer, FooterSubHeading, FooterSubText, FooterSubscription, Form, FormInput, FooterLink, FooterLinkItems,
    FooterLinkTitle, FooterLinksContainer, FooterLinksWrapper, SocialMedia, SocialMediaWrap, SocialIcon, SocialLogo, WebsiteRights, SocialIconLink, SocialIcons
} from './styles'

const Footer: FC = () => {
    return (
        <>
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Join our exclusive membership to receive the latest news and trends
                    </FooterSubHeading>
                    <FooterSubText>
                        You can unsubscribe at any time.
                    </FooterSubText>

                    <Form>
                        <FormInput name="email" type="email" placeholder="Your Email" />
                        <Button fontBig>Subscribe</Button>
                    </Form>
                </FooterSubscription>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/sign-up">How it works</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/sign-up">How it works</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/sign-up">How it works</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media </FooterLinkTitle>
                            <FooterLink to="/sign-up">How it works</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            <SocialIcon />
                            PUNGAR
                        </SocialLogo>
                        <WebsiteRights>PUNGAR ©</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram" >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube" >
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter" >
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterContainer>
        </>
    )
}

export default Footer
