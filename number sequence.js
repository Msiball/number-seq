var output = [];
var a=1;

function fizzBuzz() {
if ( a%3 === 0 && a%5 === 0)
{
    output.push("FizzBuzz");
}
    if (a%3 === 0){
        output.push("fizz")  
    }

        else if (a%5 === 0){
            output.push("buzz")
        }
            
    else {
        output.push(a);
    }
   
      a++;
    console.log(output);    
}
