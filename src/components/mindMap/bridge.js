import {React, useEffect} from "react";
import MindSectionInfo from "../mindSectionInfo/mindSectionInfo";
import { ListedItemsArtwork1 } from "../../utils/allImgs";
import Footer from "../../layouts/Footer"
import Breadcumb from '../../components/Breadcumb'
import InfoComponent from "../InfoComponent";
import "./bridge.css"
import ComNav from "../compNav/comNav"
import { useLocation } from "react-router-dom";




const Bridge = () => {
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
                  title='Bridge Between '
      />


<div className="bridge-top-pad">
      <InfoComponent
        titleSm="Bridge Between"
        titleLg="The bridge between the physical and digital world presents 
              "
        text=" 
        A playground to create a new 
        type of media.
              
              "
      />
      </div>
<div className="bridge-content-pad">
      <MindSectionInfo
        // topHead="BRIDGE BETWEEN
        // "
        img={<img src={ListedItemsArtwork1} height="150px" />}

        content=" Here we will experiment with meta-games, interactive experiences, and 
        unique ways to grow. By allowing ownership in the characters themselves, FAPE along 
        with the community is positioned to expand beyond this playbook.
"
        titleSmTwo=" Meta Games In Progress"
        contentTwo="Micro-actions and games played within the community in order to unlock new 
        experiences."
        titleSmThree="An Interactive Brand Exploring
"
        contentThree="Imagine an RPG/Anime where the community owns their characters and the brand that 
        they are helping build.
        
"


      />
      </div>
            <Footer/>

    </>
  );
};

export default Bridge;
