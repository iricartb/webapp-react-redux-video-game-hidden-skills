import * as ActionTypes from './ActionTypes';
import oItemsData from '../shared/data/items';

export const ItemsReducer = (oState = oItemsData, oAction) => {
   switch(oAction.type) {
      default:
         return oState;
   }
}