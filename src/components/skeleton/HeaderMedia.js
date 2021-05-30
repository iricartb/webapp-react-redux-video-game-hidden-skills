/* eslint-disable no-useless-constructor */
import React from 'react';

class HeaderMedia extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return(
         <div className="header-media-video">
            <video src={this.props['media-clip-ref']} autoPlay={true} muted={true} loop={true} width="77.5%" height="77.5%" />
         </div>
      );
   }
}

export default HeaderMedia;