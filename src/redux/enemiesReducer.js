import * as ActionTypes from './ActionTypes';
import oEnemiesData     from '../shared/data/enemies';

export const EnemiesReducer = (oState = oEnemiesData, oAction) => {
   switch(oAction.type) {
      default:
         return oState;
   }
}