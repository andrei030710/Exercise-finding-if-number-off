   function myFunction(){
    var a = 
    +document.getElementById("myNumber1").value;
    var b = 
    +document.getElementById("myNumber2").value;
    var c = 
    +document.getElementById("myNumber3").value;
    var d = 
    +document.getElementById("myNumber4").value;
    var h = a % 2;
    var g = b % 2;
    var i = c & 2;
    var j = d & 2;
    if (h === 0){
        document.getElementById("result1").innerHTML = "even number";
    }
    else {
        document.getElementById("result1").innerHTML = "odd number";
    }
    if (g === 0){
        document.getElementById("result2").innerHTML = "even number";
    }
    else {
        document.getElementById("result2").innerHTML = "odd number";
    }
    if (i === 0){
        document.getElementById("result3").innerHTML = "even number";
    }
    else {
        document.getElementById("result3").innerHTML = "odd number";
    }
    if (j === 0){
        document.getElementById("result4").innerHTML = "even number";
    }
    else {
        document.getElementById("result4").innerHTML = "odd number";
    }
}

function myAddYrs() {
    var a = 
    +document.getElementById("myNumber1").value;
    var b = 
    +document.getElementById("myNumber2").value;
    var c = 
    +document.getElementById("myNumber3").value;
    var d = 
    +document.getElementById("myNumber4").value;
    var sum = a + b + c +d;
    document.getElementById("Sum_of_Digits").innerHTML = sum;
}

