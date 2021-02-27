import * as ActionTypes from './ActionTypes';
import oApplicationData from '../shared/data/application';

export const ApplicationReducer = (oState = oApplicationData, oAction) => {
   switch(oAction.type) {
      case ActionTypes.SET_APPLICATION_VERSION:
         return {...oState, version: oAction.payload}; 

      case ActionTypes.SET_APPLICATION_LANGUAGE:
         return {...oState, language: oAction.payload}; 
              
      default:
         return oState;
   }
}