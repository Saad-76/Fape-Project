import React from 'react';
import "./mindMapCardsInfo.css"
import { NavLink } from "react-router-dom";

const  MindMapCardsInfo=({iconImg, heading, contentOne,button, link})=> {
  return (
      <>
      {/* <div className="cards-margin"> */}
      <div className="card-style">
        <div className="icon-image">{iconImg}</div>
     {/* <img src={iconImg} width="40" alt="" /> */}

<h5>{heading}</h5>
<p>{contentOne}</p>
<div className="mindMap-button-style">
<NavLink className="btn more-btn" to={link}>{button}</NavLink>
</div>
      </div>
      {/* </div> */}

      </>
  );
}

export default MindMapCardsInfo;
