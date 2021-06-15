/* eslint-disable no-useless-constructor */
import React                          from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import HeaderSection                  from './HeaderSection';
import CString                        from '../../shared/classes/CString';

class AppPageGeneric extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      if (this.props.data.xml.skeleton !== undefined) {
         if ((this.props.data.xml.skeleton.html !== undefined) && (this.props.data.xml.skeleton.html)) {
            document.getElementById('id-app-page-generic-skeleton').innerHTML = this.props.data.xml.skeleton.description;
         }
      }

      if (this.props.data.xml.example !== undefined) {
         if ((this.props.data.xml.example.html !== undefined) && (this.props.data.xml.example.html)) {
            document.getElementById('id-app-page-generic-example').innerHTML = this.props.data.xml.example.description;
         }
      }
   }

   render() {
      return(
         <div id="id-app-page-generic-root">
            {this.props.data.types.map((oDataType) => {
               return(
                  <div key={oDataType.id}>
                     <HeaderSection title={oDataType.header} />
                     <Container>
                        <Row>
                           <Col>
                              <Table striped bordered hover className="table-code">
                                 <tbody>
                                    {oDataType.items.map((oData) => {
                                       return(
                                          <tr key={oData.id}>
                                             <td style={{width:'20%'}}>{oData.instance}</td>
                                             <td style={{width:'80%'}}>{oData.description}</td>
                                          </tr>
                                       );                      
                                    })}
                                 </tbody>
                              </Table>
                           </Col>
                        </Row>
                     </Container>
                  </div>          
               );      
            })}

            <HeaderSection title={this.props.data.xml.header} />
            <Container>
               <Row>
                  <Col>
                     <Table striped bordered hover className="table-code">
                        <tbody>
                           <tr>
                              <td>{this.props.data.xml.attributes.start}</td>
                           </tr>
                        </tbody>
                     </Table>

                     <Table striped bordered hover className="table-code">
                        <tbody>
                           {this.props.data.xml.attributes.items.map((oXMLAttribute) => {
                              return(
                                 <tr key={oXMLAttribute.id}>
                                    <td style={{width:'20%'}}>{oXMLAttribute.name}</td>
                                    <td style={{width:'80%'}}>{oXMLAttribute.values}</td>
                                 </tr>
                              );                      
                           })}
                        </tbody>
                     </Table>

                     <Table striped bordered hover className="table-code">
                        <tbody>
                           <tr>
                              <td>{this.props.data.xml.attributes.end}</td>
                           </tr>
                        </tbody>
                     </Table>

                     {(this.props.data.xml.skeleton !== undefined) ? 
                        <Table striped bordered hover className="table-code">
                           <tbody>
                              <tr>
                                 <td id="id-app-page-generic-skeleton">
                                    {((this.props.data.xml.skeleton.html === undefined) || ((this.props.data.xml.skeleton.html !== undefined) && (!this.props.data.xml.skeleton.html))) ? ((this.props.data.xml.skeleton.description !== undefined) ? this.props.data.xml.skeleton.description : this.props.data.xml.skeleton) : CString.STRING_EMPTY}
                                 </td>
                              </tr>
                           </tbody>
                        </Table>
                        : CString.STRING_EMPTY 
                     }

                     {(this.props.data.xml.example !== undefined) ?
                        <Table striped bordered hover className="table-code">
                           <tbody>
                              <tr>
                                 <td id="id-app-page-generic-example">
                                    {((this.props.data.xml.example.html === undefined) || ((this.props.data.xml.example.html !== undefined) && (!this.props.data.xml.example.html))) ? ((this.props.data.xml.example.description !== undefined) ? this.props.data.xml.example.description : this.props.data.xml.example) : CString.STRING_EMPTY}
                                 </td>
                              </tr>
                           </tbody>
                        </Table>
                        : CString.STRING_EMPTY 
                     }
                  </Col>
               </Row>
            </Container>
         </div>
      );
   }
}

export default AppPageGeneric;