import React from "react";

const Hello = (props) => {
    return <h1>Mobile {props.from}</h1>;
};

const Mob1 = () =>{
    return <ul>
    <li>Android</li>
    <li>Blckberry</li>
    <li>iPhone</li>
    <li>Windows Phone</li>
      </ul>;
}
const Mob2 = () =>{
    return <ul>
    <li>Samsung</li>
    <li>HTC</li>
    <li>Micromax</li>
    <li>Apple</li>
      </ul>;
}


export {Hello , Mob1 ,Mob2};