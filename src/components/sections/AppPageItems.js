import React          from 'react';
import AppPageGeneric from './AppPageGeneric';

const AppPageItems = (props) => (
   <AppPageGeneric data={props.items(props.application.version, props.application.language)} />
);

export default AppPageItems;