import * as ActionTypes from './ActionTypes';

export const setApplicationVersion = (sVersion) => ({
   type     : ActionTypes.SET_APPLICATION_VERSION,
   payload  : sVersion
});

export const setApplicationLanguage = (sLanguage) => ({
   type     : ActionTypes.SET_APPLICATION_LANGUAGE,
   payload  : sLanguage
});