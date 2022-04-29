

import React from 'react'
import { SectionDivider } from '../../styles/GlobalComponents'
import { SectionAbout, SectionTeam, SecondaryBtn, SectionTitle } from './RoadmapStyles'
import Line from '../Roadmap/Line.js'

const Roadmap = () => {
  return (
    <SectionTeam id="roadmap" >
        <SectionDivider divider />
        <SectionTitle  >The Itinerary</SectionTitle>
        <SectionAbout>
        The OG Wanderer collection will include 6060 NFTs.<br/>

        <li> 60 will be held by the team for giveaways and marketing.</li>
        <li> The first 3000 members on our “Early Check In” list will earn the early mint price of 0.1ETH (~$299USD)</li>
        <li> The next 3000 Check Ins will mint at 0.15ETH (~$399USD)</li>
        <br/>
        Perks:<br/>

        <li> Complimentary travel voucher for a hotel stay up to 6 nights and worth up to $1,750USD (annual redemption)​</li>
        <li> For every 1000 Check Ins, 2 lucky winners to receive up to an additional $1,500USD in airfare and expenses. (12 winners!)</li>
        <li>Mint Out Bonus: 1 Grand Prize winner who will receive an all expense paid trip plus an additional 1ETH. ​</li>
        <br/>
        Referral Program:<br/> Any verified member, meaning you have Checked In by minting an OG Wanderer, 
        will earn a $25USD referral bonus for every fren referred who also mints
         a NFTY Vacation Club OG Wanderer NFT. As long as supplies last, there is no limit 
         on how much you can earn!

        </SectionAbout>
        <SecondaryBtn  >Join the Check-In List</SecondaryBtn>
    </SectionTeam>
  )
}

export default Roadmap