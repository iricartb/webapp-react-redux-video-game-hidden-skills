import * as ActionTypes from './ActionTypes';
import oSensorsData from '../shared/data/sensors';

export const SensorsReducer = (oState = oSensorsData, oAction) => {
   switch(oAction.type) {  
      default:
         return oState;
   }
}