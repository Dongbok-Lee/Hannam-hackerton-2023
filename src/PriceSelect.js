import React from 'react'
import './PriceSelect.css';
import { Link } from 'react-router-dom';
function PriceSelect() {
  return (
    <div className="container3">
        <div className = "selectType">
            <img className = "fishImage" src = "./img/fish.png"/>
            <p>수산</p>
        </div>
        <Link to = "/priceInfo"style={{ textDecoration: "none" , color: '#000' }}>
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

export default PriceSelect