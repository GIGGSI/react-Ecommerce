import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {

  //sidebar open
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSideBarOpen: true }
  }
  //sidebar close
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSideBarOpen: false }
  }
  //loading products
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true }
  }
  //adding data to featured_products and all products arrays
  if (action.type === GET_PRODUCTS_SUCCESS) {
    //filter the featured products
    const featured_products = action.payload
      .filter((item) => item.featured === true)

    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products
    }
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      products_loading: false,
      products_error: true
    }
  }

  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
