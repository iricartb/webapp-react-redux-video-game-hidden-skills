/* eslint-disable no-useless-constructor */
import React from 'react';

class HeaderMedia extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return(
         <div className="header-media" style={{display: (this.props.application.media) ? 'block' : 'none'}} >
            <video src={this.props['media-video']} autoPlay={true} muted={true} loop={true} width="82.50%" height="82.50%" />
            <audio src={this.props['media-audio']} autoPlay={true} loop={true} controls />
         </div>
      );
   }
}

export default HeaderMedia;