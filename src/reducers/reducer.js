import {SELECT_FRUIT} from '../actions/index';
import { combineReducers } from 'redux';


const initialState= {
  selectedFruit: '',
  fruits:{
    '西瓜': '基本通則頭尾兩端大小一致品質好的橢圓瓜種，應該要兩端大小差不多，若呈現頭小尾大的柚子形，代表品質較差；圓形瓜種的瓜形則要接近圓形，若像木瓜一般表皮有果瓣狀，則品質、風味也較差。 ',
    '蘋果': '蘋果甜',
    '芭樂': '好脆',
    '蓮霧': '好吃'
  },
  description:''
}

function fruitReducer(state = initialState , action) {

  switch (action.type) {

    case "SELECT_FRUIT":
    return Object.assign({}, state, {
        selectedFruit: action.payload,
        description: state.fruits[action.payload]
      });
  }
  return state;
}


const rootReducer = combineReducers({
  fruits: fruitReducer,

})


export default rootReducer;
