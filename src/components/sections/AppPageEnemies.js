import React from 'react';
import AppPageGeneric from './AppPageGeneric';

const AppPageEnemies = (props) => (
   <AppPageGeneric data={props.enemies(props.application.version, props.application.language)} />
);

export default AppPageEnemies;