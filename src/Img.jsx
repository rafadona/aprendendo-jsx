import React from "react";


function Img() {
    const img = "https://picsum.photos/200";

    return [<img className="food-img" alt="random" src={img + "?grayscale"} />,
    <img className="food-img" alt="bacon"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"
    />,
    <img className="food-img" alt="jamon"
        src="https://images-na.ssl-images-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg" />];

}


export default Img;