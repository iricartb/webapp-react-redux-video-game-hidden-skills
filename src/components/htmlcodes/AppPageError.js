/* eslint-disable no-useless-constructor */
import React                   from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class AppPageError extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      document.body.style.backgroundColor = 'red';
   }

   render() {
      return(
         <div id="id-app-page-error-root">
            <Container>
               <Row>
                  <Col>
                     <div id="id-app-page-error-code">
                        {this.props.code}
                     </div>
                     <div id="id-app-page-error-description">
                        Error: Resource {this.props.description}
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
       );
   }
}

export default AppPageError;