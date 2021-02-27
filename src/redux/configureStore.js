import { createStore, combineReducers } from 'redux';
import { ApplicationReducer } from './applicationReducer';
import { HeaderReducer } from './headerReducer';
import { HomeReducer } from './homeReducer';
import { ObstaclesReducer } from './obstaclesReducer';
import { LightsReducer } from './lightsReducer';
import { ItemsReducer } from './itemsReducer';
import { SplashesReducer } from './splashesReducer';
import { ObjectsReducer } from './objectsReducer';
import { EnemiesReducer } from './enemiesReducer';
import { SensorsReducer } from './sensorsReducer';
import { RoomsReducer } from './roomsReducer';

export const ConfigureStore = () => {
   const oReduxStore = createStore(
      combineReducers({
         application: ApplicationReducer,
		 header: HeaderReducer,
         home: HomeReducer,  		  
		 obstacles: ObstaclesReducer,
		 lights: LightsReducer,
		 items: ItemsReducer,
		 splashes: SplashesReducer,
		 objects: ObjectsReducer,
		 enemies: EnemiesReducer,
		 sensors: SensorsReducer,
		 rooms: RoomsReducer
      }),
   );
   
   return oReduxStore;
}