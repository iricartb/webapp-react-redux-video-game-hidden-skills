/* eslint-disable no-useless-constructor */
import React                                                                  from 'react';
import { Route, Switch                                                      } from 'react-router-dom';
import { connect                                                            } from 'react-redux';
import Header                                                                 from './Header';
import Footer                                                                 from './Footer';
import { setApplicationVersion, setApplicationLanguage, setApplicationMedia } from '../../redux/ActionCreators';
import { TransitionGroup, CSSTransition                                     } from 'react-transition-group';
import CString                                                                from '../../shared/classes/CString';

const oMapStateToProps = (oState) => ({
   application : oState.application,
   header      : oState.header,
   home        : oState.home,
   obstacles   : oState.obstacles,
   lights      : oState.lights,
   items       : oState.items,
   splashes    : oState.splashes,
   objects     : oState.objects,
   enemies     : oState.enemies,
   sensors     : oState.sensors,
   rooms       : oState.rooms
});

const oMapDispatchToProps = (dispatch) => ({
   setApplicationVersion  : (sVersion)  => {dispatch(setApplicationVersion(sVersion))},
   setApplicationLanguage : (sLanguage) => {dispatch(setApplicationLanguage(sLanguage))},
   setApplicationMedia    : (bMedia) => {dispatch(setApplicationMedia(bMedia))}
});

const getAppLayout = (Component, oParentProps = {}, oComponentProps = {}) => {
   return () => (
      <div id="id-app-skeleton-layout-content-root">
         <TransitionGroup>
            <CSSTransition classNames="page" timeout={300}>
               <Component {...oParentProps} {...oComponentProps} />
            </CSSTransition>
         </TransitionGroup>
      </div>
   );
};

class Main extends React.Component {
   constructor(props) {
      super(props);

      let oMediaVideos = this.props.header(this.props.application.version, this.props.application.language).videos;
      let oMediaAudios = this.props.header(this.props.application.version, this.props.application.language).audios;

      this.sMediaVideo = (oMediaVideos.length > 0) ? oMediaVideos[parseInt(Math.random() * oMediaVideos.length)] : CString.STRING_EMPTY;
      this.sMediaAudio = (oMediaAudios.length > 0) ? oMediaAudios[parseInt(Math.random() * oMediaAudios.length)] : CString.STRING_EMPTY;
   }
   
   render() {
      let sMenuTitle      = this.props.header(this.props.application.version, this.props.application.language).menu.title;
      let oMenuVersions   = this.props.header(this.props.application.version, this.props.application.language).menu.versions;
      let oMenuItems      = this.props.header(this.props.application.version, this.props.application.language).menu.items;
      let oMenuLanguages  = this.props.header(this.props.application.version, this.props.application.language).menu.languages;
      
      let oInjectedProps = {
         'menu-title'      : sMenuTitle,
         'menu-versions'   : oMenuVersions,
         'menu-items'      : oMenuItems,
         'menu-languages'  : oMenuLanguages,
         'media-video'     : this.sMediaVideo,
         'media-audio'     : this.sMediaAudio
      }

      return(
         <div>
            <Header {...this.props} {...oInjectedProps} />
            <Switch>
               {(oMenuItems.length > 0) ? <Route path="/" component={getAppLayout(oMenuItems[0].component, {...this.props, ...oInjectedProps}, oMenuItems[0]['component-props'])} exact={true} /> : <div></div>}

               {oMenuItems.map((oItem) => ( 
                  <Route key={oItem.name} path={oItem.ref} component={getAppLayout(oItem.component, {...this.props, ...oInjectedProps}, oItem['component-props'])} /> 
               ))}

               {(oMenuItems.length > 0) ? <Route component={getAppLayout(oMenuItems[0].component, {...this.props, ...oInjectedProps}, oMenuItems[0]['component-props'])} /> : <div></div>}
            </Switch>
            <Footer {...this.props} {...oInjectedProps} />
         </div>
      );
   }
}

export default connect(oMapStateToProps, oMapDispatchToProps)(Main);