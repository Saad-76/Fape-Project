import {React, useEffect} from "react";
import MindSectionInfo from "../mindSectionInfo/mindSectionInfo";
import { ListedItemsArtwork1 } from "../../utils/allImgs";
import Footer from "../../layouts/Footer"
import Breadcumb from '../../components/Breadcumb'
import InfoComponent from "../InfoComponent";
import "./seedling.css"
import ComNav from "../compNav/comNav"
import { useLocation } from "react-router-dom";



const Seedling = () => {
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
                  title='Seedling'
      />
      <div className="seedling-top-pad">
      <InfoComponent
        titleSm="   Seedlings"
        titleLg="An idea starts as a seed. 
              "
        text=" 
        And together we can cultivate the seedlings which will be most 
        impactful.
              
              "
      />
      </div>
      <div className="seedling-content-pad">
      <MindSectionInfo
        // topHead="SEEDLINGS"
        img={<img src={ListedItemsArtwork1} height="150px" />}

//         content="An idea starts as a seed. And together we can cultivate the seedlings which will be most 
//         impactful.
// "
        titleSmTwo=" Partnerships In Progress"
        contentTwo="There is a ton of web2 IP which we all know and love that is sitting dormant waiting for an 
        opportunity to be brought back to life in a new way. We believe web3 and the metaverse 
        has an opportunity to fuel a revival for our most beloved IPs."
        titleSmThree="DAO Exploring
"
        contentThree="Experimentation with DAOs is one of the most exciting areas of crypto today. We must 
        start small and explore various governance structures, reiterating on areas that need 
        improvement, before moving onto bigger experiments. The regulatory framework for 
        DAOs is also something that needs more research
"
       
      />
      </div>
            <Footer/>

    </>
  );
};

export default Seedling;
