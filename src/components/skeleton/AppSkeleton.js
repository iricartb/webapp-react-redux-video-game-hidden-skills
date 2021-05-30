import React                 from 'react';
import { BrowserRouter     } from 'react-router-dom';
import { Provider          } from 'react-redux';
import Main                  from './Main';
import { ConfigureStore    } from '../../redux/configureStore';

const oReduxStore = ConfigureStore();

const AppSkeleton = () => (
   <Provider store={oReduxStore}>
      <BrowserRouter>
         <Main />
      </BrowserRouter>
   </Provider>
);

export default AppSkeleton;