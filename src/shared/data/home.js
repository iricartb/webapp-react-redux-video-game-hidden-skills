import CApplication from '../classes/CApplication';
import CMessage     from '../classes/CMessage';

let sPatternUrlScreenshotsImages = 'images/screenshots/screenshot{1}.jpg';
let oHome = (sVersion, sLanguage) => {

   if (sVersion === CApplication.APPLICATION_VERSION_FIRST) {
      return({
         'videogame' : {
            'header' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_VIDEOGAME_DESCRIPTION'),
            'text'   : { 
               'header'      : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_VIDEOGAME_DESCRIPTION_TEXT_HEADER'),
               'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_VIDEOGAME_DESCRIPTION_TEXT_DESCRIPTION')
            }
         },
         'screenshots' : {
            'header'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_SCREENSHOTS'),
            'items'    : [
               {
                  'id'          : 1,
                  'image'       : sPatternUrlScreenshotsImages.replace('{1}', '1'),
                  'header'      : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_SCREENSHOTS_TEXT_HEADER_1'),
                  'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_SCREENSHOTS_TEXT_DESCRIPTION_1')
               },
               {
                  'id'          : 2,
                  'image'       : sPatternUrlScreenshotsImages.replace('{1}', '2'),
                  'header'      : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_SCREENSHOTS_TEXT_HEADER_2'),
                  'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_SCREENSHOTS_TEXT_DESCRIPTION_2')
               },
               {
                  'id'          : 3,
                  'image'       : sPatternUrlScreenshotsImages.replace('{1}', '3'),
                  'header'      : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_SCREENSHOTS_TEXT_HEADER_3'),
                  'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_SCREENSHOTS_TEXT_DESCRIPTION_3')
               },
               {
                  'id'          : 4,
                  'image'       : sPatternUrlScreenshotsImages.replace('{1}', '4'),
                  'header'      : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_SCREENSHOTS_TEXT_HEADER_4'),
                  'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_SCREENSHOTS_TEXT_DESCRIPTION_4')
               }
            ],
         },
         'platforms'   : {
            'header'   : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_AVAILABLE_PLATFORMS'),
            'releases' : [
               { 
                  'id'     : 1,
                  'header' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_AVAILABLE_PLATFORMS_RELEASES_1'),
                  'levels' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_AVAILABLE_PLATFORMS_LEVELS_1'), 
                  'items'  : [
                        {
                           'id'   : 1,
                           'name' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_AVAILABLE_PLATFORMS_RELEASES_1_TEXT_NAME_1'),
                           'ref'  : ''
                        },
                        {
                           'id'   : 2,
                           'name' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_AVAILABLE_PLATFORMS_RELEASES_1_TEXT_NAME_2'),
                           'ref'  : ''
                        },
                        {
                           'id'   : 3,
                           'name' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_AVAILABLE_PLATFORMS_RELEASES_1_TEXT_NAME_3'),
                           'ref'  : ''
                        },
                        {
                           'id'   : 4,
                           'name' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_AVAILABLE_PLATFORMS_RELEASES_1_TEXT_NAME_4'),
                           'ref'  : ''
                        }
                  ]
               },
               { 
                  'id'     : 2,
                  'header' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_AVAILABLE_PLATFORMS_RELEASES_2'),
                  'levels' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_AVAILABLE_PLATFORMS_LEVELS_2'), 
                  'items'  : [
                     {
                        'id'   : 1,
                        'name' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_AVAILABLE_PLATFORMS_RELEASES_2_TEXT_NAME_1'),
                        'ref'  : ''
                     },
                     {
                        'id'   : 2,
                        'name' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_AVAILABLE_PLATFORMS_RELEASES_2_TEXT_NAME_2'),
                        'ref'  : ''
                     },
                     {
                        'id'   : 3,
                        'name' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_AVAILABLE_PLATFORMS_RELEASES_2_TEXT_NAME_3'),
                        'ref'  : ''
                     },
                     {
                        'id'   : 4,
                        'name' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_AVAILABLE_PLATFORMS_RELEASES_2_TEXT_NAME_4'),
                        'ref'  : ''
                     }
                  ]
               }
            ]
         },
         'sources'   : {
            'header' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_SOURCE_CODE'),
            'items'  : [
               { 
                  'id'          : 1,
                  'provider'    : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_SOURCE_CODE_TEXT_PROVIDER_1'),
                  'name'        : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_SOURCE_CODE_TEXT_NAME_1'),
                  'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_SOURCE_CODE_TEXT_DESCRIPTION_1'),
                  'link'        : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_SOURCE_CODE_TEXT_LINK_1')
               }
            ]
         },
         'comments'  : {
            'header' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_TOP_COMMENTS'), 
            'items'  : [
               {
                  'id'          : 1,
                  'header'      : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_TOP_COMMENTS_TEXT_HEADER_1'),
                  'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_TOP_COMMENTS_TEXT_DESCRIPTION_1'),
                  'progressbar' : {
                     'value'  : 100.00,
                     'status' : 'success'
                  }
               },
               {
                  'id'          : 2,
                  'header'      : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_TOP_COMMENTS_TEXT_HEADER_2'),
                  'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_TOP_COMMENTS_TEXT_DESCRIPTION_2'),
                  'progressbar' : {
                     'value'  : 97.50,
                     'status' : 'success'
                  }
               },
               {
                  'id'          : 3,
                  'header'      : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_TOP_COMMENTS_TEXT_HEADER_3'),
                  'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_TOP_COMMENTS_TEXT_DESCRIPTION_3'),
                  'progressbar' : {
                     'value'  : 95.00,
                     'status' : 'success'
                  }
               },
               {
                  'id'          : 4,
                  'header'      : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_TOP_COMMENTS_TEXT_HEADER_4'),
                  'description' : CMessage.getMessage(sVersion, sLanguage, 'main', 'PAGE_HOME_HEADER_SECTION_TOP_COMMENTS_TEXT_DESCRIPTION_4'),
                  'progressbar' : {
                     'value'  : 92.50,
                     'status' : 'success'
                  }
               }
            ]
         }
      });
   }
}

export default oHome;