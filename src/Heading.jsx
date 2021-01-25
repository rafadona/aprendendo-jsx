import React from "react";


function Heading() {

    const date = new Date();
    let saudacao = "";
    const customStyle = {
        color: ""
    }

    if (date.getHours() >= 0 && date.getHours() <= 12) {
        saudacao = "Bom dia";
        customStyle.color = "red";
    } else if (date.getHours() > 12 && date.getHours() < 18) {
        saudacao = "Boa Tarde";
        customStyle.color = "orange";
    } else {
        saudacao = "Boa noite";
        customStyle.color = "blue";
    }

    return <h1 className="heading" style={customStyle}>My Favourite Foods, {saudacao}</h1>
};



export default Heading;