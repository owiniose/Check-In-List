import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {BsFillStarFill} from 'react-icons/bs'; 
import token from '../../../public/images/token.gif'

import React from 'react';
import { Img, List, Listinner,SecondaryBtn, SectionAbout, SectionTitle, RoadmapTitle, SocialContainer } from './LineStyles';

const Line = () => {
  return (
    <div>
      <RoadmapTitle>The Full Itinerary</RoadmapTitle>
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date=""
    iconStyle={{ background: 'white', color: 'gold' }}
    icon={<BsFillStarFill/>}
  >
    <SectionTitle>Leg One</SectionTitle>
    <SectionAbout>OG WANDERER uNFT</SectionAbout>
    <List>
      <SocialContainer>
    ⦁	Mint 6060 NFTs <Img   src={token} alt="logo" /></SocialContainer>

      </List>
    
    




  </VerticalTimelineElement>
  <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'white', color: 'black' }}
     contentArrowStyle={{ borderRight: '7px solid  white' }}
     date=""
     iconStyle={{ background: 'white', color: 'gold' }}
     icon={<BsFillStarFill/>}
   >
     <h1>Leg Two</h1>
  
     <SectionAbout>IMMEDIATE UTILITY</SectionAbout>

    <List>
    ⦁	Event / Location specific NFT drops 
    <br/>
    ⦁	Travel Vouchers, Vacation Winners and Referral Bonuses go out.

    </List>
 
  </VerticalTimelineElement>
  <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'white', color: 'black' }}
     contentArrowStyle={{ borderRight: '7px solid  white' }}
     date=""
     iconStyle={{ background: 'white', color: 'gold' }}
     icon={<BsFillStarFill/>}
   >
     <h1>Leg Three</h1>

     <SectionAbout>PARTNERSHIPS AND CONCIERGE SERVICES</SectionAbout>
  
     <List>
     ⦁	Align partnerships for additional membership travel perks, discounts and events<br/>

      ⦁	Establish NVC Cocierge Service</List>
      
 
  </VerticalTimelineElement>

  <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'white', color: 'black' }}
     contentArrowStyle={{ borderRight: '7px solid  white' }}
     date=""
     iconStyle={{ background: 'white', color: 'gold' }}
     icon={<BsFillStarFill/>}
   >
     <h1>Leg Four</h1>

     <SectionAbout>NFTY VACATION CLUB RESORT</SectionAbout>
  
     <List>
     ⦁	 Purchase a boutique Hotel & Resort</List>
      
 
  </VerticalTimelineElement>
  
 
</VerticalTimeline>
<SecondaryBtn  >Join the Check-in List</SecondaryBtn>

    </div>
  )
}

export default Line

