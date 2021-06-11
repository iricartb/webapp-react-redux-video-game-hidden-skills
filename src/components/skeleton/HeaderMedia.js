/* eslint-disable no-useless-constructor */
import React from 'react';

class HeaderMedia extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return(
         <div className="header-media" style={{display: (this.props.application.media) ? 'block' : 'none'}} >
            <video src={this.props['media-clip-ref']} autoPlay={true} muted={true} loop={true} width="82.50%" height="82.50%" />
            <audio src={this.props['media-audio-ref']} autoPlay={true} loop={true} controls />
         </div>
      );
   }
}

export default HeaderMedia;