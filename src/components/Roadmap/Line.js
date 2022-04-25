import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {BsFillStarFill} from 'react-icons/bs';

import React from 'react';
import { List, Listinner } from './lineStyles';

const Line = () => {
  return (
    <div>
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date=""
    iconStyle={{ background: 'white', color: 'gold' }}
    icon={<BsFillStarFill/>}
  >
    <h1>Leg One</h1>
    <h1>OG WANDERER uNFT</h1>
    <List>
    ⦁	Mint: 6060 OG Membership tokens  

    <Listinner>
    ⦁	Early Check In (Allow list) 3,000 @ .1ETH
        </Listinner>
    <Listinner>
    ⦁	Member Check In 3,000 @ .15ETH
            </Listinner>    

      </List>
    
    

    <List>
    ⦁	1 NFT = 1 hotel voucher (3,4,5,7-night stays valued up to $1,750)
 </List>
    <List>
    ⦁	2 of every 1000 minted will win airfare and expenses paid up to additional $1,500 on us!
   <Listinner> ⦁	That’s 12 lucky winners of a $3,000-$5,000 vacation </Listinner> 
 
    </List>
    <List>
    ⦁	1 Grand Prize winner of all expense paid trip plus an additional 1ETH
    </List>
   
    <List>
    ⦁	Voucher Redemption Form
    </List>
    <List>
    ⦁	Deliver Vacation Vouchers (7-day redemption window)
    </List>
    <List>
    ⦁	Discord giveaways
    </List>
    <List>
    ⦁	Discord Travel Alpha
    </List>
    <List>
    ⦁	NFT Alpha access
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
  
     <List>
     ⦁	Full-service travel concierge service
 </List>
     
     <List>
     ⦁	Travel Industry partnerships

         </List>
     <List>
     ⦁	NFT project partnerships for IRL community events
     ⦁	Cruises, resorts, etc.

             </List>

    <List>
    ⦁	Event / location specific NFT drops

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
  
     <List>
     ⦁	NFTY Vacation Club Resort  </List>
      
 
  </VerticalTimelineElement>
  
 
</VerticalTimeline>

    </div>
  )
}

export default Line

