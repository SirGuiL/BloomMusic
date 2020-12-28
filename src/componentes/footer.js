import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,

} from './footerComponents';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
    <FooterContainer>
      <FooterWrap>
          <FooterLinksContainer>
              <FooterLinksWrapper>
                  <FooterLinkItems>
                      <FooterLinkTitle>About Us</FooterLinkTitle>
                      <FooterLink to="/">How it works</FooterLink>
                      <FooterLink to="/">Testimonials</FooterLink>
                      <FooterLink to="/">Careers</FooterLink>
                      <FooterLink to="/">Terms of Use</FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                      <FooterLinkTitle>Social Medias</FooterLinkTitle>
                      <FooterLink to="/">Facebook</FooterLink>
                      <FooterLink to="/">Instagram</FooterLink>
                      <FooterLink to="/">Twitter</FooterLink>
                      <FooterLink to="/">LinkedIn</FooterLink>
                  </FooterLinkItems>
              </FooterLinksWrapper>
              <FooterLinksWrapper>
                  <FooterLinkItems>
                      <FooterLinkTitle>Videos</FooterLinkTitle>
                      <FooterLink to="/">Youtube</FooterLink>
                      <FooterLink to="/">Influencers</FooterLink>
                      <FooterLink to="/">Ambassadors</FooterLink>
                      <FooterLink to="/">Terms of Use</FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                      <FooterLinkTitle>Useful Links</FooterLinkTitle>
                      <FooterLink to="/">Support</FooterLink>
                      <FooterLink to="/">Contact</FooterLink>
                      <FooterLink to="/">Web Player</FooterLink>
                      <FooterLink to="/">advertising</FooterLink>
                  </FooterLinkItems>
              </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
              <SocialMediaWrap>
                  <SocialLogo onClick={toggleHome} to="/">
                    Bloom Music™
                  </SocialLogo>
                  <WebsiteRights>Bloom © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                  <SocialIcons>
                    <SocialIconLink href="//www.facebook.com/guilherme.limadesouza/" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href="//www.instagram.com/sir_guil_21/" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="//twitter.com" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin />
                    </SocialIconLink>
                  </SocialIcons>
              </SocialMediaWrap>
          </SocialMedia>
      </FooterWrap>
    </FooterContainer>
    );
}

export default Footer;