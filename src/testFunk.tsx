import React from 'react';

export function testFunk1(){
    let num:number = Math.random()*100;
    return(
        <div>Тест1 {num}</div>
    );
}
export function testFunk2(){
    let num:number = Math.random()*100;
    let str:string = ` text ${num}` ; 
    return(
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
    );
}

// export default testFunk;
// export default  testFunk2;