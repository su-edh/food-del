import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}:{category: string}) => {
    const {food_list}=useContext(StoreContext);
    return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list grid grid-cols-1 mt-8 gap-8 gap-y-12  sm:grid-cols-2 lg:grid-cols-4">
            {food_list.map((item,index)=>{
                if(category==="All" || category===item.category){

                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay
