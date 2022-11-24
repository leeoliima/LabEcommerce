import  HeaderContainer  from './Styled';
import logo from "../../img/labecommerce-logo.png";
import React from 'react';

 function Header() {
   return (
   <HeaderContainer>
     <img src={logo} alt="logotipo"/>
   </HeaderContainer>
   )
}

export default Header;