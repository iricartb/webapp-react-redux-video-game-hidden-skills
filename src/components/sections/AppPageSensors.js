import React from 'react';
import AppPageGeneric from './AppPageGeneric';

const AppPageSensors = (props) => (
   <AppPageGeneric data={props.sensors(props.application.version, props.application.language)} />
);

export default AppPageSensors;