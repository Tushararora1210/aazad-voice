var toggle=0;
function myFunction()
{
    if(!toggle)
    {
        toggle=1;
        document.getElementById("menu1").style.display="block";

    }
    else
    {
        toggle=0;
        document.getElementById("menu1").style.display="none";
    }

    
}


function changeimg(x)
{
    var imagename="img"+(x+1)+".jpeg";
    var i=document.getElementById("frontimg");
    i.src=imagename;
}
function change(x)
{
    document.getElementById("radio"+(x+1)).checked=true;
}
function autochange()
{
    var x;
    if(document.getElementById("radio1").checked==true)
    {
        x=0;
    }
    if(document.getElementById("radio2").checked==true)
    {
        x=1;
    }
    if(document.getElementById("radio3").checked==true)
    {
        x=2;
    }
    x=(x+1)%3;
    change(x);
    changeimg(x);

    
    
}
setInterval(autochange,5000);
var quotes=["Perfection is like infinity. You can always approach towards it but can never achieve it","Saying No is more important than saying Yes","If your Focus shifts to people's problems instead of your problems,then you can earn unlimited money"];
l=0;
x=0;
var id=setInterval(printquotes,100);
function printquotes()
{
 str=quotes[x];
 if(l>str.length)
 {
     l=0;
     x=(x+1)%3;

 }
 else{
     for(var i=0;i<=l;i++)
     {
         document.getElementById("chngquotes").innerHTML=str.substring(0,i);
     }
     l++;
     

 }
 

}


function displaynav()
{
 var width=parseInt(window.innerWidth);
 
 if(width>=701)
 {
     
    document.getElementById("pc").style.display="inline";
 }
 if(width<=700)
 {
    document.getElementById("pc").style.display="None";
 }


}
setInterval(displaynav,100);
