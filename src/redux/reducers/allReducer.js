import {
    ALL_INPUT_VALUE,
    DELETE_ITEMS,
    FAVOURITE_ITEMS,
    FORM_DATA,
} from '../actions/action'

let initialState = {

    formData: {
        name: "",
        description: "",
        img: "",
        cell: "",
        isFavourite: false,
    },
    userData: [],
    favItems:[]
}

export default (state = initialState, action) => {
    switch (action.type) {

        case FORM_DATA:
            let data = { ...state.formData };
            if (action.payload.name === 'img') {
                data[action.payload.name] = URL.createObjectURL(action.payload.value)

            } else {
                data[action.payload.name] = action.payload.value

            }
            return {
                ...state,
                formData: data
            }

        case ALL_INPUT_VALUE:
            let submitForm = [...state.userData]
            let obj = action.payload;
            obj.id = Math.floor(Math.random() * 100)
            submitForm.push(obj)
            
            return { ...state, userData: submitForm , formData :  {
                name: "",
                description: "",
                img: "",
                cell: "",
                isFavourite: false,
            }}

        case DELETE_ITEMS:
            let getfilterData = [...state.userData];
            const reomoveMatchValue = getfilterData.filter((obj) => obj.id === action.payload)
            getfilterData.splice(reomoveMatchValue, 1)
            return { ...state, userData: getfilterData }

        case FAVOURITE_ITEMS:
            let fav= [...state.userData];
            let datas = fav.filter((fav)=> fav.isFavourite === true).map((item)=> {return item})
            return { ...state, favItems: datas }

        default:
            return state;
    }
}