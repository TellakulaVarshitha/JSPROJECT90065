let n=parseInt(prompt("Enter Input",0))
let temp=n
let sum=0
let digit=0

while(n!=0)
{
    digit=parseInt(n%10)
    sum=sum+Math.pow(digit,3)
    n=parseInt(n/10)
}
if(temp==sum)
{
  document.writeln(`${temp} is a armstrong number`)
}
else
{
    document.writeln(`${temp} is not a armstrong number`)
}

