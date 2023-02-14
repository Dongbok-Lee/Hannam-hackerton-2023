import React from 'react'
import './ProductLocationSelect.css';
import { Link } from 'react-router-dom';

function ProductLocationSelect() {
  return (
    <div className="container4">
        <div className = "selectType">
            <img className = "fishImage" src = "./img/fish.png"/>
            <p>수산</p>
        </div>
        <Link to = "/productLocation" style={{ textDecoration: "none" , color: '#000' }}>
        <div className = "selectType">
            <img className = "fishImage" src = "./img/fruit.png"/>
            <p>과일</p>
        </div>
        </Link>
        <div className = "selectType">
            <img className = "fishImage" src = "./img/vegitable.png"/>
            <p>채소</p>
        </div>
    </div>
  )
}

export default ProductLocationSelect