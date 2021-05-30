import React       from 'react';
import HeaderMenu  from './HeaderMenu';
import HeaderMedia from './HeaderMedia';

const Header = (props) => (
   <div id="id-app-header-root">
      <HeaderMenu {...props} />
      <HeaderMedia {...props} />
   </div>
);

export default Header;