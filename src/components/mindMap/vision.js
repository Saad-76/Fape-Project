import {React} from "react";
import MindSectionInfo from "../mindSectionInfo/mindSectionInfo";
import { ListedItemsArtwork1 } from "../../utils/allImgs";
import InfoComponent from "../InfoComponent";
import Head from "../../layouts/Head"
import Footer from "../../layouts/Footer"
import Breadcumb from '../../components/Breadcumb'
import Image1 from "../../assets/img/test-img/download.png"
import "./vision.css"
import { useParams } from "react-router-dom";


import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ComNav from "../compNav/comNav"
// import VisionImage from "../../assets/img/test-img/Vision"



const Vision = () => {
      const routePath = useLocation();
      const onTop = () => {
        window.scrollTo(0, 4);
      }
      useEffect(() => {
        onTop()
      }, [routePath]);
 

  return (
    <>
<ComNav  />
<Breadcumb  
                  namePage='Mind Map'
                  title='Vision '
      />
{/* <Head/> */}
<div className="vision-top-pad">
      <InfoComponent
        titleSm="VISION & VALUES"
        titleLg="Our Vision
              "
        text=" 
        Create the largest decentralized brand for the metaverse that is built and 
        owned by the community.
              
              "
      />
      </div>
<div className="vision-content-pad">
      <MindSectionInfo
        img={<img src={ListedItemsArtwork1} height="150px" />}

        titleSmTwo=" Community First"
        contentTwo="Everything starts and ends with the community. The moment we prioritize something 
other than the community will be the beginning of the end. We won't let that happen, 
because we'll always have community as the #1 value of FAPE SOCIAL CLUB."
        titleSmThree=" Dope Sh*t Only:"
        contentThree="FAPE is creative, brave, and relentless. It's easy to follow trends and improve 
incrementally. It's harder to be original and do dope sh*t. We pave our own path.
"
        titleSmFour=" Trust The Process:"
        contentFour="Good things take time. Decentralized movements can't turn corners as quickly as 
centralized movements, and that's both a blessing and a curse. Decentralized doesn't 
mean there can't be leaders. The core team will provide guard rails and resources for all 
beans to grow together, but it won't happen overnight.
"
      />
      </div>
      <Footer/>

    </>
  );
};

export default Vision;
