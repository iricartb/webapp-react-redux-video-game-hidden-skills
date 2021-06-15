import CApplication from '../classes/CApplication';
import CMessage     from '../classes/CMessage';

let sPatternUrlEnemiesImages = 'images/enemies/enemy{1}.png';
let oEnemies = (sVersion, sLanguage) => {
    
   if (sVersion === CApplication.APPLICATION_VERSION_FIRST) {
      return ({
         'types': [
            {
               'id'     : 1,
               'header' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_ENEMIES'),
               'items'  : [
                  {
                     'id'          : 1,
                     'image'       : sPatternUrlEnemiesImages.replace('{1}', '1'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_ENEMIES_TEXT_INSTANCE_1'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_ENEMIES_TEXT_DESCRIPTION_1'),
                  },
                  {
                   'id'            : 2,
                     'image'       : sPatternUrlEnemiesImages.replace('{1}', '2'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_ENEMIES_TEXT_INSTANCE_2'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_ENEMIES_TEXT_DESCRIPTION_2'),  
                  }
               ]
            }
         ],
         'xml': {
            'header'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION'),
            'attributes': {
               'start'  : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_START'),
               'items'  : [
                  {
                     'id'     : 1,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_1'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_1'), 
                  },
                  {
                     'id'     : 2,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_2'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_2'), 
                  },
                  {
                     'id'     : 3,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_3'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_3'), 
                  },
                  {
                     'id'     : 4,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_4'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_4'), 
                  },
                  {
                     'id'     : 5,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_5'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_5'), 
                  },
                  {
                     'id'     : 6,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_6'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_6'), 
                  },
                  {
                     'id'     : 7,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_7'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_7'), 
                  },
                  {
                     'id'     : 8,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_8'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_8'), 
                  },
                  {
                     'id'     : 9,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_9'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_9'), 
                  },
                  {
                     'id'     : 10,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_10'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_10'), 
                  },
                  {
                     'id'     : 11,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_11'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_11'), 
                  },
                  {
                     'id'     : 12,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_12'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_12'), 
                  },
                  {
                     'id'     : 13,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_13'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_13'), 
                  },
                  {
                     'id'     : 14,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_14'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_14'), 
                  },
                  {
                     'id'     : 15,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_15'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_15'), 
                  },
                  {
                     'id'     : 16,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_16'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_16'), 
                  },
                  {
                     'id'     : 17,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_17'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_17'), 
                  },
                  {
                     'id'     : 18,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_18'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_18'), 
                  },
                  {
                     'id'     : 19,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_19'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_19'), 
                  }
               ],
               'end': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_END'),
            },
            'example': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_ENEMIES_HEADER_SECTION_XML_SPECIFICATION_EXAMPLE')
         }
      });
   }
}

export default oEnemies;