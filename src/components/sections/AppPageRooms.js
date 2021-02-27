import React          from 'react';
import AppPageGeneric from './AppPageGeneric';

const AppPageRooms = (props) => (
   <AppPageGeneric data={props.rooms(props.application.version, props.application.language)} />
);

export default AppPageRooms;