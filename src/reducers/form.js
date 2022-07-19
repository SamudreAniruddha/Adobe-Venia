export const SET_SHIPPING_INFORMATION = "@app/common/SET_SHIPPING_INFORMATION";
export const SET_SHIPPING_METHOD = "@app/common/SET_SHIPPING_METHOD";
export const SET_PAYMENT_INFORMATION = "@app/common/SET_PAYMENT_INFORMATION";
export const CLEAR_FORM = "@app/common/CLEAR_FORM";

const initialState = { shippingInformation:[], shippingMethod:[], paymentInformation:[] }

/*const addItemToCart = (state, action) => {
  const x = [action.payload];
  const y = x.map(obj =>({ ...obj, quantity: action.quantity}));
  const itemInCart = state.cart.find(item => item.id === y.id);
 
  if(!itemInCart) {
    state.cart = [...state.cart, y[0]];
  }else {
    
  }
  return { ...state };
} */
/* const deleteItemToCart = (state, action) => {
  const indexOfObject = state.cart.findIndex(object => {
    return object.id === action.payload;
  });    
  if(indexOfObject){
     state.cart.splice(indexOfObject, 1);
  } else {

  }
  return { ...state };
} */

const form = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHIPPING_INFORMATION:
      return {
        ...state,
        shippingInformation: action.payload
      };
      case SET_SHIPPING_METHOD:
      return {
        ...state,
        shippingMethod: action.payload
      };
      case SET_PAYMENT_INFORMATION:
        return {
          ...state,
          paymentInformation: action.payload
        };
    case CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
};

export default form;
export const setShippingInformation = list => ({
  type: SET_SHIPPING_INFORMATION,
  payload: list
});

export const setShippingMethod = list => ({
  type: SET_SHIPPING_METHOD,
  payload: list
});
export const setPaymentInformation = list => ({
  type: SET_PAYMENT_INFORMATION,
  payload: list
});


export const clearForm = () => ({
  type: CLEAR_FORM
});
