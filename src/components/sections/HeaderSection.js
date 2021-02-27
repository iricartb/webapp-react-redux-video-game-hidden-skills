import React                   from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const HeaderSection = (props) => (
   <div className="header-section-root">
      <Container>
         <Row>
            <Col>
               <hr /> 
            </Col>
            <Col className="header-section-title">
               {props.title} 
            </Col>
            <Col>
               <hr />  
            </Col>
         </Row>
      </Container>
   </div>
);

export default HeaderSection;