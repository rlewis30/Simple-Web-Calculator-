//******************Variable Declarations***************************************************
var decimal=false;
var firstNumber;
var secondNumber;
var result;
var operation;
//********************************Button Click Events****************************************
//Click event for button 7
$('#button7').click(function(){
    $('#display').val($('#display').val()+'7');
    $('#display').val();
});

//Click event for button 8
$('#button8').click(function(){
    $('#display').val($('#display').val()+'8');
    $('#display').val();
});

//Click event for button 9
$('#button9').click(function(){
    $('#display').val($('#display').val()+'9');
    $('#display').val();
});

//Click event for button 6
$('#button6').click(function(){
    $('#display').val($('#display').val()+'6');
    $('#display').val();
});

//Click event for button 5
$('#button5').click(function(){
    $('#display').val($('#display').val()+'5');
    $('#display').val();
});

//Click event for button 4
$('#button4').click(function(){
    $('#display').val($('#display').val()+'4');
    $('#display').val();
});

//Click event for button 3
$('#button3').click(function(){
    $('#display').val($('#display').val()+'3');
    $('#display').val();
});

//Click event for button 2
$('#button2').click(function(){
    $('#display').val($('#display').val()+'2');
    $('#display').val();
});

//Click event for button 1
$('#button1').click(function(){
    $('#display').val($('#display').val()+'1');
    $('#display').val();
});

//Click event for button 0
$('#button0').click(function(){
    $('#display').val($('#display').val()+'0');
    $('#display').val();
});

//Click event for the decimal button
$('#buttondecimal').click(function(){
    if(decimal==false)
    {
        $('#display').val($('#display').val()+'.');
        $('#display').val();
        decimal=true;
    }
    else
    {
        
    }
});

//Click event for the clear button
$('#buttonclear').click(function(){
    $('#display').val("");
    console.log($('#display').val());
    firstNumber=null;
    decimal=false;
});

//click event for the backspace button
$('#buttonbackspace').click(function(){
    let bstring=$('#display').val();
    let end=bstring.length-1;
    bstring=bstring.slice(0,end);
    $('#display').val(bstring);
});

//this is the event for the addition button
$('#buttonaddition').click(function(){
    operation="+";
    firstNumber=$('#display').val();
    $('#display').val("");
});

//this is the event for the division button
$('#buttondivide').click(function(){
    operation="/";
    firstNumber=$('#display').val();
    $('#display').val("");
});

//this is the event for the multiply button
$('#buttonmultiply').click(function(){
    operation="*";
    firstNumber=$('#display').val();
    $('#display').val("");
});

//this is the event for the subtract button
$('#buttonsubtract').click(function(){
    operation="-";
    firstNumber=$('#display').val();
    $('#display').val("");
});

//this is the event for the negative button
$('#buttonnegative').click(function(){
    let string;
    string=$('#display').val();
    if(string.substring(0,1)=="-")
    {
        console.log(string.substring(0,1));
        string=string.replace("-",""); 
        $('#display').val((string));
    }
    else
    {
        $('#display').val("-"+$('#display').val());
    }
});

//these are the branches for the equals button
$('#buttonequals').click(function(){
    if(operation=="+")
    {
        result=parseFloat(firstNumber)+parseFloat($('#display').val());
        $('#display').val(result);
        operation=null;
    }
    
    else if(operation=="/")
    {
        result=parseFloat(firstNumber)/parseFloat($('#display').val());
        $('#display').val(result);
        operation=null;
    }
    else if(operation=="*")
    {
        result=parseFloat(firstNumber)*parseFloat($('#display').val());
        $('#display').val(result);
        operation=null;
    }
    else if(operation=="-")
    {
        result=parseFloat(firstNumber)-parseFloat($('#display').val());
        $('#display').val(result);
        operation=null;
    }
    else
    {
        
    }
});
//****************************Operation Functions************************************