import CApplication from '../classes/CApplication';
import CMessage     from '../classes/CMessage';

let sPatternUrlObjectsImages = 'images/objects/object{1}.png';
let oObjects = (sVersion, sLanguage) => {

   if (sVersion === CApplication.APPLICATION_VERSION_FIRST) {
      return ({
         'types': [
            {
               'id'     : 1,
               'header' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS'),
               'items'  : [
                  {
                     'id'          : 1,
                     'image'       : sPatternUrlObjectsImages.replace('{1}', '1'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_INSTANCE_1'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_DESCRIPTION_1'),
                  },
                  {
                     'id'          : 2,
                     'image'       : sPatternUrlObjectsImages.replace('{1}', '2'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_INSTANCE_2'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_DESCRIPTION_2'),  
                  },
                  {
                     'id'          : 3,
                     'image'       : sPatternUrlObjectsImages.replace('{1}', '3'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_INSTANCE_3'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_DESCRIPTION_3'),  
                  },
                  {
                     'id'          : 4,
                     'image'       : sPatternUrlObjectsImages.replace('{1}', '4'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_INSTANCE_4'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_DESCRIPTION_4'),  
                  },
                  {
                     'id'          : 5,
                     'image'       : sPatternUrlObjectsImages.replace('{1}', '5'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_INSTANCE_5'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_DESCRIPTION_5'),  
                  },
                  {
                     'id'          : 6,
                     'image'       : sPatternUrlObjectsImages.replace('{1}', '6'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_INSTANCE_6'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_DESCRIPTION_6'),  
                  },
                  {
                     'id'          : 7,
                     'image'       : sPatternUrlObjectsImages.replace('{1}', '7'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_INSTANCE_7'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_DESCRIPTION_7'),  
                  },
                  {
                     'id'          : 8,
                     'image'       : sPatternUrlObjectsImages.replace('{1}', '8'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_INSTANCE_8'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_DESCRIPTION_8'),  
                  },
                  {
                     'id'          : 9,
                     'image'       : sPatternUrlObjectsImages.replace('{1}', '9'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_INSTANCE_9'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_DESCRIPTION_9'),  
                  },
                  {
                     'id'          : 10,
                     'image'       : sPatternUrlObjectsImages.replace('{1}', '10'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_INSTANCE_10'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_DESCRIPTION_10'),  
                  },
                  {
                     'id'          : 11,
                     'image'       : sPatternUrlObjectsImages.replace('{1}', '11'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_INSTANCE_11'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_DESCRIPTION_11'),  
                  },
                  {
                     'id'          : 12,
                     'image'       : sPatternUrlObjectsImages.replace('{1}', '12'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_INSTANCE_12'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_DESCRIPTION_12'),  
                  },
                  {
                     'id'          : 13,
                     'image'       : sPatternUrlObjectsImages.replace('{1}', '13'),
                     'instance'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_INSTANCE_13'),
                     'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_OBJECTS_TEXT_DESCRIPTION_13'),  
                  }
               ]
            }
         ],
         'xml': {
            'header'     : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION'),
            'attributes' : {
               'start' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_START'),
               'items' : [
                  {
                     'id'     : 1,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_1'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_1'), 
                  },
                  {
                     'id'     : 2,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_2'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_2'), 
                  },
                  {
                     'id'     : 3,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_3'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_3'), 
                  },
                  {
                     'id'     : 4,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_4'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_4'), 
                  },
                  {
                     'id'     : 5,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_5'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_5'), 
                  },
                  {
                     'id'     : 6,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_6'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_6'), 
                  },
                  {
                     'id'     : 7,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_7'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_7'), 
                  },
                  {
                     'id'     : 8,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_8'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_8'), 
                  },
                  {
                     'id'     : 9,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_9'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_9'), 
                  },
                  {
                     'id'     : 10,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_10'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_10'), 
                  },
                  {
                     'id'     : 11,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_11'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_11'), 
                  },
                  {
                     'id'     : 12,
                     'name'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_12'),
                     'values' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_12'), 
                  }
               ],
               'end': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_END'),
            },
            'example': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_OBJECTS_HEADER_SECTION_XML_SPECIFICATION_EXAMPLE')
         }
      });
   }
}

export default oObjects;