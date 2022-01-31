import Image from "../../../assets/img/test-img/ren_033.png"
import Video from "../../../assets/img/test-img/BackgroundVideo.mp4"
const HeroContainer = () => {
  return (

  <>
    <video
    className="Home-video_section-style"
    src={Video}
    loop={true}
    muted={true}
    autoPlay={true}
  />  
    <section className="hero-section moving section-padding" id="home">
      {/* <div className="moving-bg "></div> */}


      <div className="hero-section-content">
        <div className="container ">
          <div className="row align-items-center">
         
            </div>
            <div className="col-lg-6">
              <img src={Image} alt="" height="500px" width="500px"/>
            </div>
            <div className="col-12 col-lg-6 col-md-12">
              <div className="welcome-content">
                <div className="promo-section">
                  <h3 className="special-head gradient-text">
                    FAPE is a brand.
                  </h3>
                </div>
                <h1>
                  A new kind of brand that{" "}
                  <span className="gradient-text">We build together</span>{" "}
                </h1>
                <p className="w-text">
				A collection of 8888 avatars that give you membership access to members-only exclusive 
benefits and sets up FAPES as next-generation fashion leaders.
                </p>
                <div className="dream-btn-group">
                  <button className="btn btn-explore more-btn mr-3">
                    Explore More
                  </button>
                  <button className="btn btn-Collect more-btn">
                    Collect NFT{" "}
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroContainer;
