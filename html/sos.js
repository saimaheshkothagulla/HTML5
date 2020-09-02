var reset=document.querySelector("#b")
var head=document.querySelectorAll("td")
reset.addEventListener("click",function(){
for(var i=0;i<head.length;i++)
{
head[i].textContent='';
fooCount.count=0;
}
})
for(var i=0;i<head.length;i++)
{
head[i].addEventListener("click",fooCount)
}
function fooCount(){

if(this.textContent==='')
{
this.textContent='S';
}
else
{
this.textContent='O';
}
}
