import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { productListReducer, productSaveReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';
import Cookie from 'js-cookie';

const userInfo = Cookie.getJSON('userInfo') || null;

const initialState={ userSignin:{userInfo} };
const reducer=combineReducers({
    productList: productListReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;