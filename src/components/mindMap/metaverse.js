


import {React, useEffect} from "react";
import MindSectionInfo from "../mindSectionInfo/mindSectionInfo"
import {

	ListedItemsArtwork1} from '../../utils/allImgs'
  import Footer from "../../layouts/Footer"
  import InfoComponent from "../InfoComponent";

  import Breadcumb from '../../components/Breadcumb'
  import "./metaverse.css"
  import ComNav from "../compNav/comNav"
  import { useLocation } from "react-router-dom";



const  Metaverse=()=> {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 4);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);
  return (
      <>
          <ComNav/>

      <Breadcumb  
                  namePage='Mind Map'
                  title='Metaverse '
      />
      <div className="metaverse-top-pad">

      <InfoComponent
        titleSm="Metaverse"
        titleLg="Where The Metaverse Is Today And Where Is It Going?
              "
        text=" 
        The metaverse today is where we currently spend most of our time: Discord + Twitter. 
        How do we amplify this experience for FAPE members?
              
              "
      />
      </div>
      <div className="metaverse-content-pad">
<MindSectionInfo
// topHead='Metaverse'
img={<img src={ListedItemsArtwork1}  height='150px'/>}
titleSm='Where The Metaverse Ms Today And Where Is It Going?
'
content='   The metaverse today is where we currently spend most of our time: Discord + Twitter. 
How do we amplify this experience for FAPE members? How do we distribute the brand 
to places that have the most attention today? More importantly, where will the metaverse 
be one year+ from now?
'
titleSmTwo='Lookbook IN Progress'
contentTwo='Sorting, filtering, and simping will all be supported.'
titleSmThree='Fape 3D Exploring'
contentThree='Sandbox VR, Decentraland, Cryptovoxels, and Somnium Space are a few platforms we 
are considering. For FAPE SOCIAL CLUB, 3D means much more than simply taking a 
2D avatar and making it 3D. FAPE aims to create an immersive 3D experience when the 
time is right.
'
titleSmFour='Game Exploring'
contentFour="Many will try to create one, but few teams have the experience and background to build a 
genuinely great game with mass market appeal and scalability. Though the core team 
has the experience, it's a huge endeavour nonetheless. If we do it, we'll do it right.
"
titleSmFive="Digital Drip Exploring"
contentFive="If you're on Team FAPE, you'll be dripped out in the metaverse. We'll have you covered 
(literally, from head to toe)."


/>
</div>
<Footer/>

      </>
  );
}

export default Metaverse;
