import { createStore } from 'redux';
import  RouteReducer  from '../Reducer/Index';


const Devtools =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const Store = createStore(RouteReducer,Devtools);
export default Store;