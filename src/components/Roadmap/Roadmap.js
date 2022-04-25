

import React from 'react'
import { SectionDivider } from '../../styles/GlobalComponents'
import { SectionAbout, SectionTeam, SectionText, SectionTitle } from './RoadmapStyles'
import Line from '../Roadmap/Line.js'

const Roadmap = () => {
  return (
    <SectionTeam id ="roadmap" >
        <SectionDivider divider />
        <SectionTitle  >Roadmap</SectionTitle>
        <SectionAbout>
        The OG Wanderer collection will include 6060 NFTs. 60 will be held by the team for giveaways and marketing.
         The first 3000 members on our “Early Check In” list will earn the early mint price of 0.1ETH. 
         The next 3000 Check Ins will mint at 0.15ETH. All 6000 Club Check Ins will receive a complimentary travel voucher 
         for a hotel stay up to 6 nights and worth up to $1,750USD. In addition, for every 1000 Check Ins, NFTY Vacation 
        Club will be selecting 2 lucky winners to receive up to an additional $1,500USD in airfare and expenses. 
        So not only will every member automatically receive their complimentary travel voucher just for 
        Checking In to the NFTY Vacation Club, but 12 lucky members will win a dream vacation on us! 
        But wait… there’s more! Once we reach 6,000 Check Ins, we will be selecting 1
         Grand Prize winner who will receive an all expense paid trip plus an additional 1ETH.
         NFTY Vacation Club will also be instating a member referral program. Any verified member, 
         meaning you have Checked In by minting an OG Wanderer, will earn a $25USD referral bonus for
          every frend referred who also mints a NFTY Vacation Club OG Wanderer NFT. As long as supplies 
          last, there is no limit on how much you can earn! 

        </SectionAbout>
        
    </SectionTeam>
  )
}

export default Roadmap