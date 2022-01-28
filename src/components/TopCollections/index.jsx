import React from "react";
import TopCollectionsItem from '../TopCollectionsItem'
import InfoComponent from '../InfoComponent'
import {TopCollectionsData} from '../../data/data-components/data-TopCollections.js'
// import TopCollectionsData from './data.json'

function TopCollectionsContainer(){

  return(
    <section className="section-padding-100 clearfix" >
        <div className="container">
            <InfoComponent
              titleSm='Here comes a new wave…'
              titleLg='And surfing here is different.  '
              text='Breaking down barriers.
              Building upon communities.
              Creating magic internet money with our friends'
            />
            <div className="row">
              {TopCollectionsData && TopCollectionsData.map((item , i) => (
                <TopCollectionsItem
                  img={item.img}
                  title={item.title}
                  text={item.text}
                  Delay={item.Delay}
                />
              ))}
            </div>
        </div>
    </section>
  )
}

export default TopCollectionsContainer