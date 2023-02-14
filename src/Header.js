import React from 'react'
import {useEffect} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation, Link } from 'react-router-dom';

function Header() {

  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [ location ])


  return (
    <header className="main_header">
    <Link to="/" style={{ textDecoration: "none" , color: '#000' }}><HomeIcon sx={{fontSize : 50}} className ="main_home_icon"/></Link>
    <Link to="/priceSelect" style={{ textDecoration: "none" , color: '#000' }}><div style = {location.pathname == "/priceSelect" || location.pathname == "/priceInfo" ? {backgroundColor: '#f2f2f2', color: '#000'} : null} className="main_tab_box">
        <p>가격 정보</p>
    </div></Link>
    <Link to="/productLocationSelect" style={{ textDecoration: "none" , color: '#000' }}><div style = {location.pathname == "/productLocation" || location.pathname == "/productLocationSelect" || location.pathname == "/searchResult" ? {backgroundColor: '#f2f2f2', color: '#000'} : null} className="main_tab_second_box">
        <p>상품 위치</p>
    </div></Link>
</header>
  )
}

export default Header;