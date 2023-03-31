import React from 'react';
import { Input, Label } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { ALL_INPUT_VALUE, FAVOURITE_ITEMS, FORM_DATA } from "../redux/actions/action";
import Printform from './printform';

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getUserData = useSelector((state) => state.formData)
    const completeForm = useSelector((state) => state.userData)

    console.log(completeForm, "completeForm")

    return (
        <div className='formWrapper'>
            <h5 className='text-center mb-3'>Please fill the below fields</h5>
            <div className="wraps">
                <Label>Username</Label>
                <Input
                    type="text"
                    name="name"
                    className="input"
                    value={getUserData?.name}
                    onChange={(e) => dispatch({ type: FORM_DATA, payload: { value: e.target.value, name: "name" } })}
                />
            </div>
            <div className="wraps">
                <Label>Description</Label>
                <Input
                    type="textarea"
                    name="description"
                    className="input"
                    value={getUserData?.description}
                    onChange={(e) => dispatch({ type: FORM_DATA, payload: { value: e.target.value, name: "description" } })}
                />
            </div>
            <div className="wraps">
                <Label>Image</Label>
                <div className="selectFile">
                    <input
                        type='file'
                        name="img"
                        accept="image/*"
                        onChange={(e) => dispatch({ type: FORM_DATA, payload: { value: e.target.files[0], name: "img" } })}
                        className="uploadFile"
                    />
                    <img src={getUserData.img} className="ImgBox" />
                </div>
            </div>
            <div className="wraps">
                <Label>No of sell</Label>
                <Input
                    type="text"
                    name="cell"
                    className="input"
                    value={getUserData?.cell}
                    onChange={(e) => dispatch({ type: FORM_DATA, payload: { value: e.target.value, name: "cell" } })}
                />
            </div>
            <div className="wraps">
                <Label>Favourite</Label>
                <div>
                    <Input
                        type="radio"
                        name="isFavourite"
                        onChange={(e) => dispatch({ type: FORM_DATA, payload: { value: true, name: "isFavourite" } })}
                    />
                    <Label className="text-sm ml-5">My favourite list</Label>
                </div>
            </div>
            <button className="submitBtn mt-5" onClick={() => dispatch({ type: ALL_INPUT_VALUE, payload: getUserData })}>
                Submit
            </button>
            <button onClick={() => {
                dispatch({ type: FAVOURITE_ITEMS, payload: getUserData })
                navigate("/favourite")
            }}>Favourite List</button>
            <Printform completeForm={completeForm} />
        </div>
    )
}

export default Form