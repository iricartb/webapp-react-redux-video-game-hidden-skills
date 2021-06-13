/* eslint-disable no-useless-constructor */
import React                                                                from 'react';
import { Alert, Button, Carousel, Container, Col, Row, Table, ProgressBar } from 'react-bootstrap';
import HeaderSection                                                        from './HeaderSection';
import CString                                                              from '../../shared/classes/CString';

class AppPageHome extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      let oHomeData = this.props.home(this.props.application.version, this.props.application.language);
      
      return(
         <div id="id-app-page-home-root">
            <HeaderSection title={oHomeData.videogame.header} />
            <Container>
               <Row>
                  <Col className="app-page-home-videogame">
                     <Alert variant="primary">
                        <Alert.Heading>{oHomeData.videogame.text.header}</Alert.Heading>
                        <hr />
                        {oHomeData.videogame.text.description.split('<br>').map(item => (
                           <p key={item}>{item}</p>
                        ))}
                     </Alert>
                  </Col>
               </Row>
            </Container>

            <HeaderSection title={oHomeData.screenshots.header} />
            <Container>    
               <Row>
                  <Col>
                     <Carousel>
                        {oHomeData.screenshots.items.map((oItem) => {
                           return(
                              <Carousel.Item key={oItem.id}>
                                 <img src={oItem.image} alt={oItem.header} style={{width:'100%'}}/>
                                 <Carousel.Caption>
                                    <h3>{oItem.header}</h3>
                                    <p>{oItem.description}</p>
                                 </Carousel.Caption>
                              </Carousel.Item>         
                           );      
                        })}
                     </Carousel>
                  </Col>
               </Row>
            </Container>

            <HeaderSection title={oHomeData.platforms.header} />
            <Container>
               <Table striped bordered hover className="table-code">
                  <tbody> 
                     {oHomeData.platforms.releases.map((oRelease) => {
                        return(
                        <tr key={oRelease.id}>
                           <td className="app-page-home-platform-items-header">{oRelease.header.toUpperCase()}</td>
                        <td className="app-page-home-platform-items-levels">{oRelease.levels.toUpperCase()}</td>
                        <td>
                           <Row>
                              {oRelease.items.map((oItem) => {
                                 return(
                                    <Col key={oItem.id} className="app-page-home-platform-item" xs={12}>
                                       {(oItem.ref !== undefined) ? 
                                          <Button className="app-page-home-platform-item-button" variant="danger">{oItem.name}</Button>
                                          : CString.STRING_EMPTY
                                       }
                                    </Col> 
                                 );
                              })}
                           </Row>
                           </td>
                        </tr>
                        );
                     })}
                  </tbody>
               </Table>
            </Container>

            <HeaderSection title={oHomeData.sources.header} />
            <Container>
               <Table striped bordered hover className="table-code">
                  <tbody>
                     {oHomeData.sources.items.map((oItem) => {
                        return(
                           <tr key={oItem.id}>
                              <td className="app-page-home-source-item-name">{oItem.name.toUpperCase()}</td>
                              <td className="app-page-home-source-item-provider">{oItem.provider.toUpperCase()}</td> 							  
                              <td><a target="_blank" rel="noreferrer" href={oItem.link}>{oItem.description}</a></td> 
                           </tr> 							  
                        );
                     })}
                  </tbody>
               </Table>
            </Container>
         
            <HeaderSection title={oHomeData.comments.header} />
            <Container>    
               <Row>
                  {oHomeData.comments.items.map((oItem) => {
                     return(
                        <Col key={oItem.id} className="app-page-home-comment" xs={12} sm={6} md={3}>
                           <Alert variant="success">
                              <p className="app-page-home-comment-header">{oItem.header}</p>
                              <hr /> 
                              <p className="app-page-home-comment-description">
                                 {oItem.description}
                              </p>
                           </Alert>
                           <ProgressBar variant={oItem.progressbar.status} now={oItem.progressbar.value} label={`${oItem.progressbar.value} %`} />
                        </Col>
                     );
                  })}
               </Row>
            </Container>
         </div>
      );
   }
}

export default AppPageHome;