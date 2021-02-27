import * as ActionTypes from './ActionTypes';
import oHomeData from '../shared/data/home';

export const HomeReducer = (oState = oHomeData, oAction) => {
   switch(oAction.type) {
      default:
         return oState;
   }
}