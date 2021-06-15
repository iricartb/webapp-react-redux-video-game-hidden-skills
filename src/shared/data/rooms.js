import CApplication from '../classes/CApplication';
import CMessage     from '../classes/CMessage';

let sPatternUrlRoomsImages = 'images/rooms/room{1}.png';
let oRooms = (sVersion, sLanguage) => {

   if (sVersion === CApplication.APPLICATION_VERSION_FIRST) {
      return ({   
         'types': [
            {
               'id'     : 1,
               'header' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ROOMS_HEADER_SECTION_SCORE_ROOMS'),
               'items'  : [
                  {
                     'id'          : 1,
                     'image'       : sPatternUrlRoomsImages.replace('{1}', '1'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ROOMS_HEADER_SECTION_SCORE_ROOMS_TEXT_INSTANCE_1'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ROOMS_HEADER_SECTION_SCORE_ROOMS_TEXT_DESCRIPTION_1'),
                  },
                  {
                     'id'          : 2,
                     'image'       : sPatternUrlRoomsImages.replace('{1}', '2'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ROOMS_HEADER_SECTION_SCORE_ROOMS_TEXT_INSTANCE_2'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ROOMS_HEADER_SECTION_SCORE_ROOMS_TEXT_DESCRIPTION_2'),  
                  },
                  {
                     'id'          : 3,
                     'image'       : sPatternUrlRoomsImages.replace('{1}', '3'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ROOMS_HEADER_SECTION_SCORE_ROOMS_TEXT_INSTANCE_3'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ROOMS_HEADER_SECTION_SCORE_ROOMS_TEXT_DESCRIPTION_3'),  
                  },
                  {
                     'id'          : 4,
                     'image'       : sPatternUrlRoomsImages.replace('{1}', '4'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ROOMS_HEADER_SECTION_SCORE_ROOMS_TEXT_INSTANCE_4'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ROOMS_HEADER_SECTION_SCORE_ROOMS_TEXT_DESCRIPTION_4'),  
                  },
                  {
                     'id'          : 5,
                     'image'       : sPatternUrlRoomsImages.replace('{1}', '5'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ROOMS_HEADER_SECTION_SCORE_ROOMS_TEXT_INSTANCE_5'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ROOMS_HEADER_SECTION_SCORE_ROOMS_TEXT_DESCRIPTION_5'),  
                  }
               ]
            }
         ],
         'xml': {
            'header'     : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ROOMS_HEADER_SECTION_XML_SPECIFICATION'),
            'attributes' : {
               'start' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ROOMS_HEADER_SECTION_XML_SPECIFICATION_START'),
               'items' : [
                  {
                     'id'     : 1,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ROOMS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_1'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ROOMS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_1', [2]), 
                  }
               ],
               'end': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ROOMS_HEADER_SECTION_XML_SPECIFICATION_END'),
            },
            'skeleton': {
               'html'        : true,
               'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ROOMS_HEADER_SECTION_XML_SPECIFICATION_SKELETON')
            },
            'example': {
               'html'        : true,
               'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ROOMS_HEADER_SECTION_XML_SPECIFICATION_EXAMPLE')
            }
         }
      });
   }
}

export default oRooms;