import React          from 'react';
import AppPageGeneric from './AppPageGeneric';

const AppPageSplashes = (props) => (
   <AppPageGeneric data={props.splashes(props.application.version, props.application.language)} />
);

export default AppPageSplashes;