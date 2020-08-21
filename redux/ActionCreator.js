import * as ActionTypes from './ActionTypes';
import {BaseUrl} from '../shared/baseUrl';
import { comments } from './comments';
import {DISHES} from '../shared/dishes';


// export const fetchComments=()=>(dispatch)=>{
//     fetch(BaseUrl+'comments')
//     .then(response=>{
//      if(response.ok)
//      return response;
//      else{
//          var err=new Error('Error'+response.status+":"+response.statusText)
//          err.response=response;
//          throw err;
//      }   
//     },
//     error=>{
//         var errMess=new Error(error.message);
//         throw errMess;
//     })
//     .then(response=>response.json())
//     .then(comments=>dispatch(addComments(comments)))
// }

export const fetchDishes=()=>(dispatch)=>{
dispatch(dishloading(true));
setTimeout(() => {
    dispatch(addDishes(DISHES))
}, 6000);
}

const dishloading=()=>({
    type:ActionTypes.DISHES_LOADING
});

const addDishes=(dishes)=>({
    type:ActionTypes.ADD_DISHES,
    payload:dishes

});

const dishesFailed=(errMess)=>({
    type:ActionTypes.DISHES_FAILED,
    payload:errMess

});