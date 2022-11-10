function randNum(min, max){
    return Math.floor(Math.random() * (max-min+1) + min);
}


function randColor(){
    return colores[Math.floor(Math.random()*colores.length)];
}


let colores = [
    "#2C3E50",
    "#E74C3C",
    "#ECF0F1",
    "#349BDB",
    "#2980B9"
];