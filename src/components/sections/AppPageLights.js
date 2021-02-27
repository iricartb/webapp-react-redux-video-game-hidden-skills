import React          from 'react';
import AppPageGeneric from './AppPageGeneric';

const AppPageLights = (props) => (
   <AppPageGeneric data={props.lights(props.application.version, props.application.language)} />
);

export default AppPageLights;