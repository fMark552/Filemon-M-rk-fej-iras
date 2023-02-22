const fej=document.getElementById("fej") //1
const iras=document.getElementById("iras") //2
const kez=document.getElementById("kez")

let valasz=document.getElementById("valasz")
let dobas=document.getElementById("dob")
let gyozelem=document.getElementById("gyoz")
let vereseg=document.getElementById("ver")

let D=0
let Gy=0
let V=0

const max=2
let fejiras

function fejtipp()
{
    fejiras = Math.floor(Math.random() * max + 1);
    console.log(fejiras);
    if(fejiras==1)
    {
        kez.src="fej.png"
        valasz.innerHTML="ELTALÁLTA"
        Gy++
        D++
        dobas.innerHTML=D
        gyozelem.innerHTML=Gy
    }
    else
    {
        kez.src="iras.png"
        valasz.innerHTML="NEM TALÁLTA EL"
        V++
        D++
        dobas.innerHTML=D
        vereseg.innerHTML=V
    }
 
}

function irastipp()
{
    fejiras = Math.floor(Math.random() * max + 1);
    console.log(fejiras);
    if(fejiras==2)
    {
        kez.src="iras.png"
        valasz.innerHTML="ELTALÁLTA"
        Gy++
        D++
        dobas.innerHTML=D
        gyozelem.innerHTML=Gy
    }
    else
    {
        kez.src="fej.png"
        valasz.innerHTML="NEM TALÁLTA EL"
        V++
        D++
        dobas.innerHTML=D
        vereseg.innerHTML=V
    }
}

var id = null;
function myMove() 
{
  var pozi = 15;  // kiindulási pont
  clearInterval(id);
  id = setInterval(frame, 5);  // sebesség
  function frame() 
  {
    if (pozi == 430)  // végpont
    {  
      clearInterval(id);
    } 
    else 
    {
      pozi++; 
      kez.style.left=pozi + 'px';  // irány 1
      kez.style.left=pozi + 'px';  // irány 2
    }
  }
}