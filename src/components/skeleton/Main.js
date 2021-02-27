import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import { connect        } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import AppPageError from '../htmlcodes/AppPageError';
import CMessage from '../../shared/classes/CMessage';
import { setApplicationVersion, setApplicationLanguage   } from '../../redux/ActionCreators';
import { TransitionGroup, CSSTransition                  } from 'react-transition-group';

const oMapStateToProps = (oState) => ({
   application: oState.application,
   header: oState.header,
   home: oState.home,
   obstacles: oState.obstacles,
   lights: oState.lights,
   items: oState.items,
   splashes: oState.splashes,
   objects: oState.objects,
   enemies: oState.enemies,
   sensors: oState.sensors,
   rooms: oState.rooms
});

const oMapDispatchToProps = (dispatch) => ({
   setApplicationVersion: (sVersion) => {dispatch(setApplicationVersion(sVersion))},
   setApplicationLanguage: (sLanguage) => {dispatch(setApplicationLanguage(sLanguage))}
});

const getAppLayout = (Component, oParentProps = {}, oComponentProps = {}) => {
   return () => (
      <div id="id-app-skeleton-layout-root">
         <Header {...oParentProps} />
         <TransitionGroup>
            <CSSTransition classNames="page" timeout={300}>
               <Component {...oParentProps} {...oComponentProps} />
            </CSSTransition>
         </TransitionGroup>
         <Footer {...oParentProps} />
      </div>
   );
};

const getAppLayoutError = (Component, oParentProps = {}, oComponentProps = {}) => {
   return () => (
      <div id="id-app-skeleton-layout-error-root">
         <Component {...oParentProps} {...oComponentProps} />
      </div>
   );
};

class Main extends React.Component {
   constructor(props) {
      super(props);
   }
   
   render() {
      let sMenuTitle = this.props.header(this.props.application.version, this.props.application.language).menu.title;
      let oMenuVersions = this.props.header(this.props.application.version, this.props.application.language).menu.versions;
      let oMenuItems = this.props.header(this.props.application.version, this.props.application.language).menu.items;
      let oMenuLanguages = this.props.header(this.props.application.version, this.props.application.language).menu.languages;
      let sMediaClipRef = this.props.header(this.props.application.version, this.props.application.language).clip.ref;

      let oInjectedProps = {
         'menu-title': sMenuTitle,
         'menu-versions': oMenuVersions,
         'menu-items': oMenuItems,
         'menu-languages': oMenuLanguages,
         'media-clip-ref': sMediaClipRef
      }

      return(
         <div>
            <Switch>
               {(oMenuItems.length > 0) ? <Route path="/" component={getAppLayout(oMenuItems[0].component, {...this.props, ...oInjectedProps}, oMenuItems[0]['component-props'])} exact={true} /> : <div></div>}

               {oMenuItems.map((oItem) => ( 
                  <Route key={oItem.name} path={oItem.ref} component={getAppLayout(oItem.component, {...this.props, ...oInjectedProps}, oItem['component-props'])} /> 
               ))}

               <Route component={getAppLayoutError(AppPageError, {...this.props, ...oInjectedProps}, {code: CMessage.getMessage(null, this.props.application.language, 'application', 'PAGE_ERROR_NOT_FOUND_CODE'), description: CMessage.getMessage(null, this.props.application.language, 'application', 'PAGE_ERROR_NOT_FOUND_DESCRIPTION')})} />
            </Switch>
         </div>
      );
   }
}

export default connect(oMapStateToProps, oMapDispatchToProps)(Main);