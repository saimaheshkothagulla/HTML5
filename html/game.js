var reset=document.querySelector("#b")
var head=document.querySelectorAll("td")
reset.addEventListener("click",function(){
for(var i=0;i<head.length;i++)
{
head[i].textContent='';
}
})
for(var i=0;i<head.length;i++)
{
head[i].addEventListener("dblclick",function(){
if(this.textContent==='S')
{
this.textContent='O'
}
})
head[i].addEventListener("click",function(){
if(this.textContent==='')
{
this.textContent='S'
}
})
}
