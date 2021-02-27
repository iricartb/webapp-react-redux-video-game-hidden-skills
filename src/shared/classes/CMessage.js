import CApplication from './CApplication';
import CString from './CString';
import oMessagesApplication from '../messages/application';
import oMessagesMain from '../messages/main';

class CMessage {
   static getMessage(sVersion, sLanguage, sFile, sKey, oParameters = []) {
      let sMessage = sKey;
      let oContextCApplication = CApplication;
      let oContextMessagesApplication = oMessagesApplication;
      let oContextMessagesMain = oMessagesMain;
 
      let oLanguageMessages = eval('oContextMessages' + sFile.substr(0, 1).toUpperCase() + sFile.substr(1, sFile.length)).filter((oLanguageMessages) => {
	      if (sVersion === null) return oLanguageMessages.language === eval('oContextCApplication.APPLICATION_LANGUAGE_' + sLanguage)
	      else return ((oLanguageMessages.version === eval('oContextCApplication.APPLICATION_VERSION_' + sVersion)) && (oLanguageMessages.language === eval('oContextCApplication.APPLICATION_LANGUAGE_' + sLanguage)))
      });
      
      if (oLanguageMessages.length > 0) {
         oLanguageMessages = oLanguageMessages[0].messages;
		 
         sMessage = oLanguageMessages[sKey];

		   for(var i = 0; i < oParameters.length; i++) {
			   var sKeyParameter = '{' + (i + 1) + '}';
			
		      while (sMessage.indexOf(sKeyParameter) >= 0) {
		         sMessage = sMessage.replace(sKeyParameter, oParameters[i]);
			   }			
		   }
      }
      
      return sMessage;
   }
};

export default CMessage;