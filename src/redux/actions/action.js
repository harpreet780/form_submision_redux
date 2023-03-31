export const ALL_INPUT_VALUE = 'ALL_INPUT_VALUE';
export const FORM_DATA = 'FORM_DATA';
export const DELETE_ITEMS = 'DELETE_ITEMS';
export const FAVOURITE_ITEMS = 'FAVOURITE_ITEMS';

export const toExpression = (type, payload) => ({
    type,
    payload
  });

export const addInputValue = (addvalue)=> toExpression(ALL_INPUT_VALUE, addvalue);
export const formDataList = (data)=> toExpression(FORM_DATA, data);
export const deleteItems = (del)=> toExpression(DELETE_ITEMS, del);
export const FavItems = (fav)=> toExpression(FAVOURITE_ITEMS, fav);