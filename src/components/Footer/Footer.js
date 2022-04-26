import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { SiTiktok } from "react-icons/si";


import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIcons, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          {/* <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">Phone</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@nftyvacationclub.com">
          contact@nftyvacationclub.com
          </LinkItem> */}
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>In Web3 We Trust</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://ticktock.com/nfty_vacation">
            <SiTiktok size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/NftyVacation">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.con/nfty_vacation">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
