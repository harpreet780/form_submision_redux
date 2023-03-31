import React from 'react'
import { useSelector } from 'react-redux'

const FavouritePage = () => {
    const FavouriteItems = useSelector((state) => state.favItems)
    
  return (
    <div className='p-3'>
        <h5 className='text-center'>Favourite Items</h5>
        {FavouriteItems.length <=0 && <p className='text-center'>"No Data Found"</p>}
        <div style={{ display: 'flex', flexWrap: "wrap" }}>
            {FavouriteItems?.map((obj) => {
                return (
                    <div className='printBox'>
                        <p>id:  <span>{obj.id}</span></p>
                        <p>Name:  <span>{obj.name}</span></p>
                        <p>Description:  <span>{obj.description}</span></p>
                        <p>Image: <img src={obj.img} className="printImg" /></p>
                        <p>No. of cell:  <span>{obj.cell}</span></p>
                    </div>
                )
            })}

        </div>
    </div>
  )
}

export default FavouritePage