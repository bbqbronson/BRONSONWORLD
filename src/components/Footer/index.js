import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa'
import GitHubIcon from '@material-ui/icons/GitHub';
import { animateScroll as scroll } from 'react-scroll'
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
  SocialIconLink
} from './FooterElements'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  };
  return (
    <FooterContainer>
      <FooterWrap>
        {/* <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/sign-up'>How it works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='/'>Contact</FooterLink>
              <FooterLink to='/'>Support</FooterLink>
              <FooterLink to='/'>Destinations</FooterLink>
              <FooterLink to='/'>Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to='/'>Submit Video</FooterLink>
              <FooterLink to='/'>Ambassadors</FooterLink>
              <FooterLink to='/'>Agency</FooterLink>
              <FooterLink to='/'>Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to='/'>Instagram</FooterLink>
              <FooterLink to='/'>Facebook</FooterLink>
              <FooterLink to='/'>Youtube</FooterLink>
              <FooterLink to='/'>Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer> */}
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Bronson Perez
            </SocialLogo>
            <WebsiteRights>BRONSONWORLD © 2021 Something something.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://github.com/bronsonsoda' target='_blank' aria-label='Github'>
                <GitHubIcon />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/b_perez_10/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.youtube.com/channel/UCq8gx7t8KIkAeVF_uH0MIoA'
                target='_blank'
                aria-label='Youtube'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                target='_blank'
                aria-label='Twitter'
                href='https://twitter.com/bronson_pp'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/bronson-perez/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
};

export default Footer
