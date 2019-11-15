export const ADD_DATA = 'ADD_DATA';
export const UPDATE_CART = 'UPDATE_CART';

export default (state, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {...state, orders: action.data};
    case UPDATE_CART: {
      const { positionIndex, count } = action;
      return {
        ...state, 
        orders: [
          ...state.orders.slice(0, positionIndex), 
          {...state.orders[positionIndex], count},
          ...state.orders.slice(positionIndex+1)
        ]
      }
    }
    default:
      break;
  }
}