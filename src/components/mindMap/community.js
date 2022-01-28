


import React from 'react';
import MindSectionInfo from "../mindSectionInfo/mindSectionInfo"
import {

	ListedItemsArtwork1} from '../../utils/allImgs'
  import Footer from "../../layouts/Footer"
  import Breadcumb from '../../components/Breadcumb'
  import InfoComponent from "../InfoComponent";
import "./community.css"
import ComNav from "../compNav/comNav"


const  Community=()=> {
  return (
      <>
    <ComNav/>

<Breadcumb  
                  namePage='Mind Map'
                  title='Community '
      />

<div className="community-top-pad">
      <InfoComponent
        titleSm="Community"
        titleLg="We are the skaters of the internet.
              "
        text=" 
        We're skating between the blurred lines of the 
        physical and digital worlds as they are beginning to blend.
              
              "
      />
      </div>
      <div className="community-content-pad">
<MindSectionInfo
img={<img src={ListedItemsArtwork1}  height='150px'/>}
titleSm='We are the skaters of the internet.
'
content=" We are a community of 
individuals who aren't afraid to push the boundaries, challenge the status quo, and 
communicate boldly. We're making an impact on web3 culture."

titleSmTwo=' Empower Creative From Within.'
contentTwo="We're building out the 
infrastructure to surface and promote artists. We're already seeing the impact within our 
community from the support and help that we provide each other."

titleSmThree="Our Community Stands For Web3 And An Open Internet."
contentThree="We will take steps to educate 
the community on ways to protect our data and subvert web2 power. We look to lead as 
well as to back other movements that share a similar vision in censorship-resistance and 
a decentralized metaverse.
"
titleSmFour=" Mobilize The Community"
contentFour="This means recruiting 
for Global Ambassadors. Creating meet-up playbooks for ambassadors to run locally. It 
also means we need to figure out governance for the brand in a way that allows us to 
take input from the community while also making decisions as efficiently and effectively 
as possible.

"



/>
</div>
<Footer/>

      </>
  );
}

export default Community;
