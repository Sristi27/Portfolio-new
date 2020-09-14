function submit(e)
{

 e.preventDefault();
 var input1=document.getElementById("name");
 var input2=document.getElementById("email");
 var input3=document.getElementById("message");
 var div1=document.getElementsByClassName("sent-message")[0];

 div1.style.display="block";
 input1.innerHTML="";
 input2.innerHTML="";
 input3.innerHTML="";
 

}