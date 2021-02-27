import React from 'react';
import AppPageGeneric from './AppPageGeneric';

const AppPageObstacles = (props) => (
   <AppPageGeneric data={props.obstacles(props.application.version, props.application.language)} />
);

export default AppPageObstacles;