import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
    <img className="home_image" src="https://m.media-amazon.com/images/I/61JQEuBf5WL._SX3000_.jpg"
        alt="" 
    />
    <div className="home_row">
    <Product
     id="1" 
     title="Samsung Galaxy M12 (White,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate" 
     price={11499}
     rating={5}
     image="https://m.media-amazon.com/images/I/71Y8rH2cJiL._AC_UY218_.jpg"
     />

     <Product
     id="2" 
     title="realme narzo 50i (Carbon Black, 4GB RAM+64GB Storage) - with No Cost EMI/Additional Exchange Offers" 
     price={8999}
     rating={4}
     image="https://m.media-amazon.com/images/I/71djAn3nxoL._AC_UY218_.jpg"
     />
    </div>

    <div className="home_row">
    <Product
     id="3" 
     title="Redmi 9 (Sky Blue, 4GB RAM, 64GB Storage) | 2.3GHz Mediatek Helio G35 Octa core Processor" 
     price={8499}
     rating={5}
     image="https://m.media-amazon.com/images/I/71A9Vo1BatL._AC_UY218_.jpg"
     />

     <Product
     id="4" 
     title="Redmi 9A (Nature Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery" 
     price={6999}
     rating={4}
     image="https://m.media-amazon.com/images/I/71sxlhYhKWL._AC_UY218_.jpg"
     />

    <Product
     id="5" 
     title="Lenovo IdeaPad Slim 1 Intel Celeron N4020 11.6 (29.46cm) HD Thin & Light Laptop (4GB/256 GB SSD/Windows 10/MS Office/Platinum Grey/1.2Kg), 81VT0071IN
" 
     price={30000}
     rating={4}
     image="https://m.media-amazon.com/images/I/61km1VkaCsL._AC_UY218_.jpg"
     />
    </div>

    <div className="home_row">
    <Product
     id="6" 
     title="HP 15 11th Gen Intel Core i3 Processor 15.6 (39.62cms) FHD Laptop with Alexa Built-in(i3-1115G4/8GB/1TB HDD/M.2 Slot/Win 10/MS Office/Natural Silver/1.76 Kg), 15s-" 
     price={45999}
     rating={4}
     image="https://m.media-amazon.com/images/I/81pG0gZywML._AC_UY218_.jpg"
     />
      </div> 
  
        </div> 
    )
}

export default Home
