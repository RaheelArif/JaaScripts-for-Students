











function changeColor(){
    var number = Math.random();
    var updatedNumber = Math.floor((number * 6) + 1);
    var a = document.getElementById("h1");
    switch(updatedNumber){
        case 1:
        a.className = "one";
        break;
        case 2:
        a.className = "two";
        break;
        case 3:
        a.className = "three";
        break;
        case 4:
        a.className = "four";
        break;
        case 5:
        a.className = "five";
        break;
        default:
        a.className = "six";


    }
}






function abc(b){

    var a =  document.getElementById(b).value ;
   document.getElementById("settingValue").value = a;
}