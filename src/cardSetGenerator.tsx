import React from "react";
import ReactDOM from "react-dom";
import {card} from './cardCreator'

export function cardSet(){
    let card1 = new card();
    console.log(card1);
    //let elem = <div></div>;
    return card1.renderCard() ;
}