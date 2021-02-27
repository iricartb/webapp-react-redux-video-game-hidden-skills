import React from 'react';
import AppPageGeneric from './AppPageGeneric';

const AppPageObjects = (props) => (
   <AppPageGeneric data={props.objects(props.application.version, props.application.language)} />
);

export default AppPageObjects;