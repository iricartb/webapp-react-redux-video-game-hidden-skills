import * as ActionTypes from './ActionTypes';
import oLightsData      from '../shared/data/lights';

export const LightsReducer = (oState = oLightsData, oAction) => {
   switch(oAction.type) {
      default:
         return oState;
   }
}