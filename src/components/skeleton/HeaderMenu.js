import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Nav, Navbar } from 'react-bootstrap';

class HeaderMenu extends React.Component {
   constructor(props) {
      super(props);
	  
	  this.handleClickVersion = this.handleClickVersion.bind(this);
	  this.handleClickLanguage = this.handleClickLanguage.bind(this);
   }
   
   handleClickVersion(e) {
      this.props.setApplicationVersion(e.target.attributes['name'].value);
   }
   
   handleClickLanguage(e) {
      this.props.setApplicationLanguage(e.target.attributes['name'].value);
   }
   
   render() {
      return(  	   
         <div id="id-app-header-menu-root">
            <Navbar bg="light" expand="lg">
               <Navbar.Brand className="header-menu-title">
			      {this.props['menu-title']}
				  
				  {this.props['menu-versions'].map((oVersion) => {
                     if (oVersion.name === this.props.application.version) {
				        return(
				           <Button key={oVersion.name} name={oVersion.name} className="header-menu-version" variant="warning">{oVersion.description}</Button>
			            );
				     }
				     else { 
				        return(
			               <Button id={oVersion.id} key={oVersion.name} name={oVersion.name} className="header-menu-version" variant="outline-warning" onClick={this.handleClickVersion}>{oVersion.description}</Button>
	                    );
       	             }
                  })}
			   </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
         
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                     {this.props['menu-items'].map((oItem) => (
                        <NavLink key={oItem.name} className="header-menu-item" activeClassName="header-menu-item-active" to={oItem.ref}>{oItem.name}</NavLink>
                     ))}
                  </Nav>
			      <Nav>
			         {this.props['menu-languages'].map((oLanguage) => {
                        if (oLanguage.name === this.props.application.language) {
				           return(
				              <Button key={oLanguage.id} name={oLanguage.name} className="header-menu-language" variant="success">{oLanguage.description}</Button>
			               );
				        }
				        else { 
				           return(
				              <Button id={oLanguage.id} key={oLanguage.name} name={oLanguage.name} className="header-menu-language" variant="outline-success" onClick={this.handleClickLanguage}>{oLanguage.description}</Button>
			               );
				        }
                     })}
			      </Nav>
               </Navbar.Collapse>
            </Navbar>
         </div>
      );
   }
}

export default HeaderMenu;