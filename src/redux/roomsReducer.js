import * as ActionTypes from './ActionTypes';
import oRoomsData from '../shared/data/rooms';

export const RoomsReducer = (oState = oRoomsData, oAction) => {
   switch(oAction.type) {  
      default:
         return oState;
   }
}