import CApplication from '../classes/CApplication';
import CMessage     from '../classes/CMessage';

let sPatternUrlObstaclesImages = 'images/obstacles/obstacle{1}.png';
let oObstacles = (sVersion, sLanguage) => {

   if (sVersion === CApplication.APPLICATION_VERSION_FIRST) {
      return ({
         'types': [
            {
               'id'     : 1,
               'header' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_WALL_OBSTACLES'),
               'items'  : [
                  {
                     'id'          : 1,
                     'image'       : sPatternUrlObstaclesImages.replace('{1}', '1'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_WALL_OBSTACLES_TEXT_INSTANCE_1'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_WALL_OBSTACLES_TEXT_DESCRIPTION_1'),
                  },
                  {
                     'id'          : 2,
                     'image'       : sPatternUrlObstaclesImages.replace('{1}', '2'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_WALL_OBSTACLES_TEXT_INSTANCE_2'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_WALL_OBSTACLES_TEXT_DESCRIPTION_2'),
                  },
                  {
                     'id'          : 3,
                     'image'       : sPatternUrlObstaclesImages.replace('{1}', '3'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_WALL_OBSTACLES_TEXT_INSTANCE_3'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_WALL_OBSTACLES_TEXT_DESCRIPTION_3'),
                  },
                  {
                     'id'          : 4,
                     'image'       : sPatternUrlObstaclesImages.replace('{1}', '4'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_WALL_OBSTACLES_TEXT_INSTANCE_4'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_WALL_OBSTACLES_TEXT_DESCRIPTION_4'),
                  },
                  {
                     'id'          : 5,
                     'image'       : sPatternUrlObstaclesImages.replace('{1}', '5'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_WALL_OBSTACLES_TEXT_INSTANCE_5'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_WALL_OBSTACLES_TEXT_DESCRIPTION_5'),
                  },
                  {
                     'id'          : 6,
                     'image'       : sPatternUrlObstaclesImages.replace('{1}', '6'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_WALL_OBSTACLES_TEXT_INSTANCE_6'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_WALL_OBSTACLES_TEXT_DESCRIPTION_6'),
                  }
               ]
            },
            {
               'id'     : 2,
               'header' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_COLUMN_OBSTACLES'),
               'items'  : [
                  {
                     'id'          : 1,
                     'image'       : sPatternUrlObstaclesImages.replace('{1}', '7'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_COLUMN_OBSTACLES_TEXT_INSTANCE_1'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_COLUMN_OBSTACLES_TEXT_DESCRIPTION_1'),  
                  },
                  {
                     'id'          : 2,
                     'image'       : sPatternUrlObstaclesImages.replace('{1}', '8'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_COLUMN_OBSTACLES_TEXT_INSTANCE_2'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_COLUMN_OBSTACLES_TEXT_DESCRIPTION_2'),  
                  },
                  {
                     'id'          : 3,
                     'image'       : sPatternUrlObstaclesImages.replace('{1}', '9'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_COLUMN_OBSTACLES_TEXT_INSTANCE_3'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_COLUMN_OBSTACLES_TEXT_DESCRIPTION_3'),  
                  }
               ]       
            } 
         ],
         'xml': {
            'header'     : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION'),
            'attributes' : {
               'start' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_START'),
               'items' : [
                  {
                     'id'     : 1,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_1'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_1', ['2, blue, green, purple, red, yellow']), 
                  },
                  {
                     'id'     : 2,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_2'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_2'), 
                  },
                  {
                     'id'     : 3,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_3'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_3'), 
                  },
                  {
                     'id'     : 4,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_4'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_4'), 
                  },
                  {
                     'id'     : 5,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_5'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_5'), 
                  },
                  {
                     'id'     : 6,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_6'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_6'), 
                  },
                  {
                     'id'     : 7,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_7'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_7'), 
                  },
                  {
                     'id'     : 8,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_8'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_8'), 
                  },
                  {
                     'id'     : 9,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_9'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_9'), 
                  },
                  {
                     'id'     : 10,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_10'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_10'), 
                  },
                  {
                     'id'     : 11,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_11'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_11'), 
                  },
                  {
                     'id'     : 12,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_12'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_12'), 
                  },
                  {
                     'id'     : 13,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_13'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_13'), 
                  },
                  {
                     'id'     : 14,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_14'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_14'), 
                  },
                  {
                     'id'     : 15,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_15'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_15'), 
                  },
                  {
                     'id'     : 16,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_16'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_16'), 
                  },
                  {
                     'id'     : 17,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_17'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_17'), 
                  },
                  {
                     'id'     : 18,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_18'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_18'), 
                  },
                  {
                     'id'     : 19,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_19'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_19'), 
                  },
                  {
                     'id'     : 20,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_20'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_20'), 
                  },
                  {
                     'id'     : 21,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_21'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_21'), 
                  },
                  {
                     'id'     : 22,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_22'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_22'), 
                  },
                  {
                     'id'     : 23,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_23'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_23'), 
                  },
                  {
                     'id'     : 24,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_24'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_24'), 
                  },
                  {
                     'id'     : 25,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_25'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_25'), 
                  }
               ],
               'end': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_END'),
            },
            'example': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBSTACLES_HEADER_SECTION_XML_SPECIFICATION_EXAMPLE')
         }
      });
   }
}

export default oObstacles;