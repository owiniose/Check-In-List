import Link from 'next/link';
import React from 'react';
import logo from '../../../public/images/NVC_Gold.png'
import { Box, Img, SectionTitle,BoxText,SocialIcons, SocialContainer,SectionText, SecondaryBtn } from './AcomplishmentsStyles';
import { AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import {FaDiscord} from 'react-icons/fa'




const Acomplishments = () => ( 
    
  <Box>
    
    <Img src={logo} alt="logo"/>
    
   <SectionTitle> NFTY VACATION CLUB</SectionTitle>
   <BoxText>
   NFTY Vacation Club is bringing the travel industry to Web3 and Web3 to IRL.
    We are a full service Web3 Vacation club that gives members instant vacation perks upon purchasing one
     of our OG Membership NFTs. Membership will include an exclusive NFT, 1 annual vacation package, access
      to additional travel discounts, travel concierge service, giveaways, NFT and travel experts,
       community, and alpha, exclusive IRL member events, and more! 

</BoxText><Link href ="#roadmap">
   <SecondaryBtn  >Learn More</SecondaryBtn></Link>
   <SocialContainer>
          <SocialIcons href="https://twitter.com/Nftyvacation">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://discord.com">
            <FaDiscord size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/nfty_vacation_club">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
  </Box>

  
);

export default Acomplishments;
