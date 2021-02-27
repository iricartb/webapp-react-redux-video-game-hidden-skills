import CApplication from '../classes/CApplication';
import CMessage from '../classes/CMessage';

let sPatternUrlSensorsImages = 'images/sensors/sensor{1}.png';
let oSensors = (sVersion, sLanguage) => {

   if (sVersion == CApplication.APPLICATION_VERSION_FIRST) {
      return ({   
         'types': [
            {
               'id': 1,
               'header': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_SENSORS'),
               'items': [
                  {
                     'id': 1,
                     'image': sPatternUrlSensorsImages.replace('{1}', '1'),
                     'instance': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_SENSORS_TEXT_INSTANCE_1'),
                     'description': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_SENSORS_TEXT_DESCRIPTION_1'),
                  },
                  {
                     'id': 2,
                     'image': sPatternUrlSensorsImages.replace('{1}', '2'),
                     'instance': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_SENSORS_TEXT_INSTANCE_2'),
                     'description': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_SENSORS_TEXT_DESCRIPTION_2'),
                  },
                  {
                     'id': 3,
                     'image': sPatternUrlSensorsImages.replace('{1}', '3'),
                     'instance': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_SENSORS_TEXT_INSTANCE_3'),
                     'description': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_SENSORS_TEXT_DESCRIPTION_3'),
                  },
                  {
                     'id': 4,
                     'image': sPatternUrlSensorsImages.replace('{1}', '4'),
                     'instance': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_SENSORS_TEXT_INSTANCE_4'),
                     'description': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_SENSORS_TEXT_DESCRIPTION_4'),
                  },
                  {
                     'id': 5,
                     'image': sPatternUrlSensorsImages.replace('{1}', '5'),
                     'instance': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_SENSORS_TEXT_INSTANCE_5'),
                     'description': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_SENSORS_TEXT_DESCRIPTION_5'),
                  },
                  {
                     'id': 6,
                     'image': sPatternUrlSensorsImages.replace('{1}', '6'),
                     'instance': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_SENSORS_TEXT_INSTANCE_6'),
                     'description': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_SENSORS_TEXT_DESCRIPTION_6'),
                  },
                  {
                     'id': 7,
                     'image': sPatternUrlSensorsImages.replace('{1}', '7'),
                     'instance': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_SENSORS_TEXT_INSTANCE_7'),
                     'description': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_SENSORS_TEXT_DESCRIPTION_7'),
                  }
               ]
            }
         ],
         'xml': {
            'header': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION'),
            'attributes': {
               'start': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_START'),
               'items': [
                  {
                     'id': 1,
                     'name': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_1'),
                     'values': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_1'), 
                  },
                  {
                     'id': 2,
                     'name': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_2'),
                     'values': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_2'), 
                  },
                  {
                     'id': 3,
                     'name': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_3'),
                     'values': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_3'), 
                  },
                  {
                     'id': 4,
                     'name': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_4'),
                     'values': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_4'), 
                  },
                  {
                     'id': 5,
                     'name': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_5'),
                     'values': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_5'), 
                  },
                  {
                     'id': 6,
                     'name': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_6'),
                     'values': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_6'), 
                  },
                  {
                     'id': 7,
                     'name': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_7'),
                     'values': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_7'), 
                  },
                  {
                     'id': 8,
                     'name': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_8'),
                     'values': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_8'), 
                  },
                  {
                     'id': 9,
                     'name': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_NAME_9'),
                     'values': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_ATTRIBUTE_VALUES_9'), 
                  }
               ],
               'end': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_END'),
            },
            'example': CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_SENSORS_HEADER_SECTION_XML_SPECIFICATION_EXAMPLE')
         }
      });
   }
}

export default oSensors;