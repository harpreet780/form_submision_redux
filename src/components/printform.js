import React from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_ITEMS } from '../redux/actions/action';

const Printform = ({ completeForm }) => {
    const dispatch = useDispatch();

    return (
        <div style={{ display: 'flex', flexWrap: "wrap" }}>
            {completeForm?.map((obj) => {
                return (
                    <div className='printBox'>
                        <p>id:  <span>{obj.id}</span></p>
                        <p>Name:  <span>{obj.name}</span></p>
                        <p>Description:  <span>{obj.description}</span></p>
                        <p>Image: <img src={obj.img} className="printImg" /></p>
                        <p>No. of cell:  <span>{obj.cell}</span></p>
                        <button onClick={()=> dispatch({type: DELETE_ITEMS, completeForm})} className="submitBtn">Delete</button>
                    </div>
                )
            })}

        </div>
    )
}

export default Printform