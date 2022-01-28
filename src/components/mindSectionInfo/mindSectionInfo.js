import React from "react";
import "./mindSectionInfo.css";

const SectionInfo = ({
  titleBg,
  titleSm,
  titleSmTwo,
  titleSmThree,
  titleSmFour,
  titleSmFive,
  img,
  content,
  topHead,
  contentTwo,
  contentThree,
  contentFour,
  contentFive,
}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="heading-mindSection-style">{topHead}</h2>
          <div className="col-md-6 ">
            <div className="image-mindSection-style">{img}</div>
          </div>
          <div className="col-md-6 content-mindSection-style">
            {titleSm ? <h4>{titleSm}</h4> : ""}
            {content ? <p>{content}</p> : ""}

            {titleSmTwo ? <h4>{titleSmTwo}</h4> : ""}

            {contentTwo ? <p>{contentTwo}</p> : ""}

            {titleSmThree ? <h4>{titleSmThree}</h4> : ""}
            {contentThree ? <p>{contentThree}</p> : ""}

            {titleSmFour ? <h4>{titleSmFour}</h4> : ""}

            {contentFour ? <p>{contentFour}</p> : ""}
            {titleSmFive ? <h4>{titleSmFive}</h4> : ""}

            {contentFive ? <p>{contentFive}</p> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionInfo;
