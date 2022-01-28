import { NavLink } from "react-router-dom";

import InfoComponent from '../InfoComponent'
import ListedItemsItem from '../ListedItemsItem'
import {ListedItemsData} from '../../data/data-components/data-ListedItems.js'
// import ListedItemsData from './data.json'

import './listedItems.css'

function ListedItemsContainer(){

  // console.log(ListedItemsData , ListedItemsData[0].imgSm)

  return(
    <section className="features section-padding-0-100 " id="#team">

        <div className="container">
            <InfoComponent
              titleSm='The art team behind FAPE SOCIAL CLUB has enjoyed success in the film industry, fashion 
              and gaming.'
              titleLg='Their work has always gained mainstream recognition and adaptation.'
              text='They’ve 
              worked with Marvel, Titan and Warner Bros among others.'
            />

            <div className="row align-items-center">
            	{ListedItemsData && ListedItemsData.map((item , i) => (
	                <ListedItemsItem
	                	imgBig={item.imgBig}
	                	imgSm={item.imgSm}
	                	title={item.title}
	                	price={item.price}
	                	bid={item.bid}
	                />
            	))}
                {/* <div className="col-12 col-lg-12 text-center">
                    <NavLink className="btn more-btn" to="/discover">Load More</NavLink>
                </div> */}
            </div>
            
        </div>
    </section>
  )
}

export default ListedItemsContainer