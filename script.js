

function abc(){
    var a = parseInt(document.getElementById("first").value);
    var b = parseInt( document.getElementById("second").value);
    var c = parseInt(document.getElementById("third").value);
    var d = parseInt(document.getElementById("fourth").value);
    var e = parseInt( document.getElementById("fifth").value);
    var sum = a +b +c +d + e; 
    if(sum <= 1000){
        sum = sum + 40;
        document.getElementById("h1").innerHTML ="total = " + sum
    }else{
        sum = sum - 20;
        document.getElementById("h1").innerHTML ="total = " + sum
    }
}








