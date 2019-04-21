

function calculator(){
    var a = Number(document.getElementById("firstNumber").value) ;
    var b = Number(document.getElementById("secondNumber").value);  ;
    var operation = document.getElementById("operation").value;
    switch(operation){
        case "+":
        var answer = a + b
        document.write("answer is = " + answer);
        break;
    
        case "-":
        var answer = a - b
        document.write("answer <br>  is = " +  answer);
        break;
    
        case "*":
        var answer = a * b
        document.write("answer is = " +  answer);
        break;
    
        case "/":
        var answer = a / b
        document.write("answer is = " +  answer);
        break;
        default:
        alert("please select right operation")
    
    }
}










