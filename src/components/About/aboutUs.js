
import React from 'react';
import SectionInfo from "../SectionInfo/sectionInfo"
import {

	ListedItemsArtwork1} from '../../utils/allImgs'
  import InfoComponent from '../InfoComponent'
  import "./aboutUs.css"


const  AboutUs=()=> {
  return (
      <>
      <div className="about-top-pad">
        <InfoComponent
              titleSm='About Us.'
              titleLg=' A collection of 8888 avatars
              '
              text='  Avatars that give you membership access to members-only exclusive 
              benefits and sets up FAPES as next-generation fashion leaders.
              '
            />
            </div>

            <div className="about-content-pad">
<SectionInfo
// topHead='About Us'
img={<img src={ListedItemsArtwork1}  height='150px'/>}
// titleBg='About page'
content=' A collection of 8888 avatars that give you membership access to members-only exclusive 
benefits and sets up FAPES as next-generation fashion leaders.It starts with exclusive street 
wear collabs, NFT drops, live events, and much more that will be revealed over time. 
Community ownership in FAPE SOCIAL CLUB allows for a new genre of media which the 
world has yet to explore. Fape is your identity in the metaverse — lets build together.
'
contentTwo="Fapeverse is a corner of the metaverse where art, community, and culture fuse to create 
magic. The lines between the physical and digital worlds are blurring and the rules are being 
rewritten."
/>
</div>
      </>
  );
}

export default AboutUs;
