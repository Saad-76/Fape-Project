import React from 'react';
import MindMapCardsInfo from "../mindMapCardsInfo/mindMapCardsInfo"
import InfoComponent from '../InfoComponent'
import Image1 from "../../assets/img/test-img/download.png"

const  MindMapCards=()=> {
  return (
      <>


<InfoComponent
              titleSm='  THE BEGINNING'
              titleLg='THE MIND MAP 
              '
              text=' 
              • First drop
• Raffles/Giveaways
              • Presales/whitelisting
              • Prime collection available for auction 
              • Mint date 
              • Fape Reveal 
              • Legendry Fape collection
              
              '
            />

      <div className="container">
<div className="row">
<div className="col-md-4">
<MindMapCardsInfo 
iconImg={<img src={Image1}  height='150px'/>}
heading="VISION & VALUES"
contentOne="Create the largest decentralized brand for the metaverse that is built and 
owned by the community"
link="/vision"
button="Read More"

/>

</div>
<div className="col-md-4">
<MindMapCardsInfo 
iconImg={<img src={Image1}  height='150px'/>}

heading="COMMUNITY"
contentOne="We're skating between the blurred lines of the 
physical and digital worlds as they are beginning to blend."
link="/community"
button="Read More"


/>
</div>
<div className="col-md-4">
<MindMapCardsInfo 
iconImg={<img src={Image1}  height='150px'/>}

heading="METAVERSE"
contentOne="The metaverse today is where we currently spend most of our time: Discord + Twitter.  we amplify this experience for members."
link="/metaverse"
button="Read More"


/>
</div>
<div className="col-md-4">
<MindMapCardsInfo 
iconImg={<img src={Image1}  height='150px'/>}

heading="PHYSICAL WORLD"
contentOne="Members of The FAPE SOCIAL CLUB can expect exclusive drops in perpetuity. Meet-ups, exhibits, music festivals"
link="/physical"
button="Read More"

/>
</div>
<div className="col-md-4">
<MindMapCardsInfo 
iconImg={<img src={Image1}  height='150px'/>}

heading="BRIDGE BETWEEN
"
contentOne="The bridge between the physical and digital world presents a playground to create a new 
type of media."
link="/bridge"
button="Read More"

/>
</div>
<div className="col-md-4">
<MindMapCardsInfo 
iconImg={<img src={Image1}  height='150px'/>}

heading="SEEDLINGS"
contentOne="An idea starts as a seed. And together we can cultivate the seedlings which will be most 
impactful."
link="/seedling"
button="Read More"

/>
</div>

</div>
</div>

      </>
  );
}

export default MindMapCards;
