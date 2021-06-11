import * as ActionTypes from './ActionTypes';

export const setApplicationVersion = (sVersion) => ({
   type    : ActionTypes.SET_APPLICATION_VERSION,
   payload : sVersion
});

export const setApplicationLanguage = (sLanguage) => ({
   type    : ActionTypes.SET_APPLICATION_LANGUAGE,
   payload : sLanguage
});

export const setApplicationMedia = (bMedia) => ({
   type    : ActionTypes.SET_APPLICATION_MEDIA,
   payload : bMedia
});