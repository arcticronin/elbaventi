//API
let apiKey = "";//qui, tra le parentesi ci devi mettere la chiava che ottieni con la registrazione gratuita al sito openweathermap.org
let city = "Portoferraio";
let uri = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

(document.getElementById("oggi")).addEventListener("click", funz);

function funz() {
    console.log(uri);
    var request = new XMLHttpRequest();
    //request.open( metodo , URL , sincrono? true o false);
    request.open('GET', uri, true);
    request.onload = function(){
        var data = JSON.parse(this.response);
        var potenzaVento = data.wind.speed;
        var direzioneVento = data.wind.deg;
        console.log(data);
        console.log("potenza= " + potenzaVento);
        console.log("direzione= " + direzioneVento);
        console.log("AnalisiVento= " + intToWind(direzioneVento));
        document.getElementById("poppaVento").innerHTML=(intToWind(direzioneVento)+" "+potenzaVento);
    }
    request.send();
}

function intToWind (degrees){
  var vento="";
  if (degrees<= 22.5 || degrees > 337.5)
    vento = "Tramontana";
  else if (degrees> 22.5 && degrees <= 67.5 )
    vento = "Grecale";
  else if (degrees> 67.5 && degrees <= 112.5 )
    vento = "Levante"; 
  else if (degrees> 112.5 && degrees <= 157.5 )
    vento = "Scirocco"; 
  else if (degrees> 157.5 && degrees <= 202.5 )
    vento = "Mezzogiorno"; 
  else if (degrees> 202.5 && degrees <= 247.5 )
    vento = "Libeccio"; 
  else if (degrees> 247.5 && degrees <= 292.5 )
    vento = "Levante"; 
  else if (degrees> 292.5 && degrees <= 337.5 )
    vento = "Levante"; 
  return vento;

}





//effetto ripple
const buttons = document.querySelectorAll('a');
buttons.forEach(btn=>{
  btn.addEventListener('click', function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x +'px';
    ripples.style.top = y +'px';
    this.appendChild(ripples);

    setTimeout(()=>{
      ripples.remove()
    },1000)
})
})

/*script per ajax 

const form = {
  devocercare: document.getElementById('btn-mima'),
  parola: document.getElementById('parola-da-ind'),
  removable: document.getElementById('removable')
 };

 console.log(form);

form.devocercare.addEventListener('click', () =>{
  console.log('button pressed~!');
  const request = new XMLHttpRequest();

  request.onload = ()=> {
    console.log(request.responseText);
    let quellochemitorna = null;
    try {
      quellochemitorna = JSON.parse(request.responseText);
    } catch (e) {
      console.error('errore, sono nel blocco catch');
    }
    if (quellochemitorna){
      console.log("sono dentro a if...eseguiresponse");
      eseguisuresponse(quellochemitorna);
    }
  };

  console.log('sto mandando la richiesta');
  request.open('post', 'search.php');
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.send();

});

function eseguisuresponse(quellochemitorna){
    console.log("sono dentro a eseguiresponse");
    console.log(quellochemitorna);
    //mi svuota la lista, potrei anche lasciarlo
    while(form.parola.firstChild){
      form.parola.removeChild(form.parola.firstChild);
    }
     const li = document.createElement('li');
     li.textContent = quellochemitorna.parola;
     form.parola.appendChild(li);
     form.parola.style.display = "block";
     form.removable.style.display = "none";

  }*/
