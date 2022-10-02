class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
var m0 = new Movie("Casino Royale","Eon Productions","PG13");
//console.log(m0);
var m1 = new Movie("Paiya","TirupathiBros");
var m2 = new Movie("SK","arts");

var newArray = [m0,m1,m2];
//console.log(newArray);
getPG=(newArray)=>{
    return newArray.filter((ele)=>ele.rating=="PG");
}
console.log(getPG(newArray));

// Create Class with constructor to construct radius and color
