import { ActionTypes } from "../Constants/action-types";

const InitialState = {
      products:[],
}
export const productReducer = (state = InitialState,{type, payload}) => {
      switch (type) {
            case ActionTypes.SET_PRODUCTS:
                  return {...state, products:payload}      
            default:
                  return state;
      }
}

export const selectProductReducer = (state = {}, {type,payload}) => {
      switch (type) {
            case ActionTypes.SELECTED_PRODUCT:
                  return {...state, payload}  
            case ActionTypes.SELECTED_PRODUCT:
                  return {}     
            default:
                  return state;
      }
}

