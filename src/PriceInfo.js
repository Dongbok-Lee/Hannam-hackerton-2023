import React from 'react';
import './PriceInfo.css';

function PriceInfo() {
  return (
    <div className= "container2">
        <div className = "warn_price_text2">
            <p>※실 구매시 측정가격과 차이가 날 수 있습니다.</p>
        </div>
        <div className="price_products2">
            <div className= "product_price_box2">
                <div className="product_image_cover_box2">
                    <img className="product_price_image2" src="./img/키위.png"/>
                </div>
                <p>키위</p>
                <p>1kg 당 약 8,000원</p>
            </div>


            <div className="price_products2">
            <div className= "product_price_box2">
                <div className="product_image_cover_box2">
                    <img className="product_price_image2" src="./img/수박.png"/>
                </div>
                <p>수박</p>
                <p>1kg 당 약 15,000원</p>
            </div>
        </div>


        <div className="price_products2">
            <div className= "product_price_box2">
                <div className="product_image_cover_box2">
                    <img className="product_price_image2" src="./img/포도.png"/>
                </div>
                <p>포도</p>
                <p>1kg 당 약 6,000원</p>
            </div>
        </div>


        <div className="price_products2">
            <div className= "product_price_box2">
                <div className="product_image_cover_box2">
                    <img className="product_price_image2" src="./img/망고.png"/>
                </div>
                <p>애플망고</p>
                <p>1kg 당 약 30,000원</p>
            </div>
        </div>

        <div className="price_products2">
            <div className= "product_price_box2">
                <div className="product_image_cover_box2">
                    <img className="product_price_image2" src="./img/메론.png"/>
                </div>
                <p>메론</p>
                <p>1kg 당 약 8,000원</p>
            </div>
        </div>

        <div className="price_products2">
            <div className= "product_price_box2">
                <div className="product_image_cover_box2">
                    <img className="product_price_image2" src="./img/딸기.png"/>
                </div>
                <p>딸기</p>
                <p>1kg 당 약 15,000원</p>
            </div>
        </div>

        <div className="price_products2">
            <div className= "product_price_box2">
                <div className="product_image_cover_box2">
                    <img className="product_price_image2" src="./img/사과.png"/>
                </div>
                <p>사과</p>
                <p>1kg 당 약 6,000원</p>
            </div>
        </div>

        <div className="price_products2">
            <div className= "product_price_box2">
                <div className="product_image_cover_box2">
                    <img className="product_price_image2" src="./img/오렌지.png"/>
                </div>
                <p>오렌지</p>
                <p>1kg 당 약 30,000원</p>
            </div>
        </div>
        </div>

        <div className = "price_info_dots2">
            <div className = "active_dot2"/>
            <div className = "dot2"/>
            <div className = "dot2"/>
            <div className = "dot2"/>
            <div className = "dot2"/>
        </div>
    </div>
  )
}

export default PriceInfo;