var btn0 = document.getElementById('btn0')
var btn1 = document.getElementById('btn1')
var btnClr = document.getElementById('btnClr')
var btnEql = document.getElementById('btnEql')
var res = document.getElementById('res')
var btnSum = document.getElementById('btnSum')
var btnSub = document.getElementById('btnSub')
var btnMul = document.getElementById('btnMul')
var btnDiv = document.getElementById('btnDiv')
let Operand = ''
let operator = ''
btn0.onclick = function () {
    Operand = Operand + btn0.innerHTML
    res.innerHTML = Operand
}
btn1.onclick = function () {
    Operand = Operand + btn1.innerHTML
    res.innerHTML = Operand

}
btnSum.onclick = function () {
    Operand = Operand + btnSum.innerHTML
    operator = btnSum.innerHTML
    res.innerHTML = Operand

}
btnMul.onclick = function () {
    Operand = Operand + btnMul.innerHTML
    operator = btnMul.innerHTML
    res.innerHTML = Operand


}
btnSub.onclick = function () {
    Operand = Operand + btnSub.innerHTML
    operator = btnSub.innerHTML
    res.innerHTML = Operand

}
btnClr.onclick = function () {
    Operand = ''
    res.innerHTML = Operand

}
btnDiv.onclick = function () {
    Operand = Operand + btnDiv.innerHTML
    operator = btnDiv.innerHTML
    res.innerHTML = Operand

}



let addition = function () {

    var numbers = Operand.split("+");
    if(numbers[1]==''){
        Operand=''
        return res.innerHTML=Operand
    }
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    var sum = x + y;
    return sum.toString(2);
}
let subtraction = function () {

    var numbers = Operand.split("-");
    if(numbers[1]==''){
        Operand=''
        return res.innerHTML=Operand
    }
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    var sub = x - y;
    return sub.toString(2);
}
let multiplication = function () {

    var numbers = Operand.split("*");
    if(numbers[1]==''){
        Operand=''
        return res.innerHTML=Operand
    }
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    var multiply = x * y;
    return multiply.toString(2);
}
let division = function () {

    var numbers = Operand.split("/");
    if(numbers[1]==''){
        Operand=''
        return res.innerHTML=Operand
    }
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    var division = x / y;
    return division.toString(2);
}
btnEql.onclick = function () {
    if(operator=='+'){
        
        res.innerHTML=addition()
        Operand=''
    }
    else if(operator=='-'){
        
        res.innerHTML=subtraction()
        Operand=''
    }else if(operator=='*'){
        
        res.innerHTML=multiplication()
        Operand=''
    }
    else if(operator=='/'){
        
        res.innerHTML=division()
        Operand=''
    }else if(operator==''){
        
          res.innerHTML=Operand
          Operand =''
        
    }else{
        Operand =''
        return res.innerHTML=Operand


    }

}
