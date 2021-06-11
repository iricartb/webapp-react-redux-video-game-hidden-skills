import AppPageHome      from '../../components/sections/AppPageHome';
import AppPageObstacles from '../../components/sections/AppPageObstacles';
import AppPageLights    from '../../components/sections/AppPageLights';
import AppPageItems     from '../../components/sections/AppPageItems';
import AppPageSplashes  from '../../components/sections/AppPageSplashes';
import AppPageObjects   from '../../components/sections/AppPageObjects';
import AppPageEnemies   from '../../components/sections/AppPageEnemies';
import AppPageSensors   from '../../components/sections/AppPageSensors';
import AppPageRooms     from '../../components/sections/AppPageRooms';
import CApplication     from '../classes/CApplication';
import CMessage         from '../classes/CMessage';

let oHeader = (sVersion, sLanguage) => {

   if (sVersion === CApplication.APPLICATION_VERSION_FIRST) {
      return({
         'menu': {
            'title'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'HEADER_MENU_TITLE'),
            'versions' : [
               {
                  'id'          : 1,
                  'name'        : CApplication.APPLICATION_VERSION_FIRST,
                  'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'HEADER_MENU_VERSIONS_FIRST')
               }			   
            ],
            'items': [
               { 
                  'id'              : 1,
                  'name'            : CMessage.getMessage(sVersion, sLanguage, 'main', 'HEADER_MENU_ITEMS_HOME'), 
                  'ref'             : '/home', 
                  'component'       : AppPageHome, 
                  'component-props' : {}
               },
               {
                  'id'              : 2,
                  'name'            : CMessage.getMessage(sVersion, sLanguage, 'main', 'HEADER_MENU_ITEMS_OBSTACLES'), 
                  'ref'             : '/obstacles',
                  'component'       : AppPageObstacles,
                  'component-props' : {} 
               },
               {
                  'id'              : 3,
                  'name'            : CMessage.getMessage(sVersion, sLanguage, 'main', 'HEADER_MENU_ITEMS_LIGHTS'),
                  'ref'             : '/lights',
                  'component'       : AppPageLights,
                  'component-props' : {}
               },
               {
                  'id'              : 4,
                  'name'            : CMessage.getMessage(sVersion, sLanguage, 'main', 'HEADER_MENU_ITEMS_ITEMS'),
                  'ref'             : '/items',
                  'component'       : AppPageItems,
                  'component-props' : {}
               },
               {
                  'id'              : 5,
                  'name'            : CMessage.getMessage(sVersion, sLanguage, 'main', 'HEADER_MENU_ITEMS_SPLASHES'),
                  'ref'             : '/splashes',
                  'component'       : AppPageSplashes,
                  'component-props' : {}
               },
               {
                  'id'              : 6,
                  'name'            : CMessage.getMessage(sVersion, sLanguage, 'main', 'HEADER_MENU_ITEMS_OBJECTS'),
                  'ref'             : '/objects',
                  'component'       : AppPageObjects,
                  'component-props' : {}
               },
               {
                  'id'              : 7,
                  'name'            : CMessage.getMessage(sVersion, sLanguage, 'main', 'HEADER_MENU_ITEMS_ENEMIES'),
                  'ref'             : '/enemies',
                  'component'       : AppPageEnemies,
                  'component-props' : {}
               },
               {
                  'id'              : 8,
                  'name'            : CMessage.getMessage(sVersion, sLanguage, 'main', 'HEADER_MENU_ITEMS_SENSORS'),
                  'ref'             : '/sensors',
                  'component'       : AppPageSensors,
                  'component-props' : {}
               },
               {
                  'id'              : 9,
                  'name'            : CMessage.getMessage(sVersion, sLanguage, 'main', 'HEADER_MENU_ITEMS_ROOMS'),
                  'ref'             : '/rooms',
                  'component'       : AppPageRooms,
                  'component-props' : {}
               }
            ],
            'languages': [
               {
                  'id'          : 1,
                  'name'        : CApplication.APPLICATION_LANGUAGE_ENGLISH,
                  'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'HEADER_MENU_LANGUAGES_ENGLISH')       
               },
               {
                  'id'          : 2,
                  'name'        : CApplication.APPLICATION_LANGUAGE_SPANISH,
                  'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'HEADER_MENU_LANGUAGES_SPANISH')
               },
               {
                  'id'          : 3,
                  'name'        : CApplication.APPLICATION_LANGUAGE_FRENCH,
                  'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'HEADER_MENU_LANGUAGES_FRENCH')
               },
               {
                  'id'          : 4,
                  'name'        : CApplication.APPLICATION_LANGUAGE_ITALIAN,
                  'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'HEADER_MENU_LANGUAGES_ITALIAN')
               },
               {
                  'id'          : 5,
                  'name'        : CApplication.APPLICATION_LANGUAGE_RUSSIAN,
                  'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'HEADER_MENU_LANGUAGES_RUSSIAN')
               }         
            ]
         },
         'clip': {
            'ref': '/media/videos/hidden-skills.mp4' 
         },
         'audio': {
            'ref': '/media/audios/hidden-skills.mp3' 
         }     
      });
   }
}

export default oHeader;