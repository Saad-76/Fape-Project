import React from 'react';
import "./sectionInfo.css"


const  SectionInfo=({titleBg,img,content,topHead, contentTwo })=> {
  return(
      <>

<div className="row sectionInfo-style">
    <h3 className="top-heading-style">{topHead}</h3>
    <div className="col-md-6 ">
        {/* <img />  */}
       <div className="image-section-style"> {img}</div>
        </div>
    <div className="col-md-6 content-section-style">
    <h5 >{titleBg}</h5>
<p>{content}</p>
<p>{contentTwo}</p>
    </div>

</div>
      </>
  );
}

export default SectionInfo;
