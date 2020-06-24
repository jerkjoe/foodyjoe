import {combineReducers} from 'redux'
import cartReducer from './cart'
import authReducer from './auth'
import vendorReducer from './vendor'
import lastVisitedVendorIdReducer from './lastVisitedVendorId'
import {firestoreReducer} from 'redux-firestore'
export default combineReducers({
  cartState: cartReducer,
  lastVisitedVendorIdState: lastVisitedVendorIdReducer,
  auth:authReducer,
  vendor: vendorReducer
})