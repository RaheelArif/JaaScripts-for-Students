var cities = ["jrw", "fsd", "isb", "karachi" , "multan", "lahore"];

console.log("console window")

var name = false;
for( var i = 0; i < cities.length; i++ ){
    if(cities[i] === "isb"){
        name = true; 
    }

    if(name === true){
       alert("value found ") 
    }else{
        alert("value not found")
    }

}








// for( var i = 0; i < cities.length; i++ ){
//    console.log(i)
// }


// alert(cities[0]);
// alert(cities[1]);
// alert(cities[2]);
// alert(cities[3]);







