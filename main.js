function tocaSom(seletorAudio){
   const elemento = document.querySelector(seletorAudio).play();
   
   if( elemento != null && elemento.localName === 'audio' ){
         elemento.play();  
      }else{
         console.log('elemento não encontrado');
      }
}


const listaDeTeclas = document.querySelectorAll('.tecla');

let cont =0;


for ( let cont = 0; cont < listaDeTeclas.length; cont++ ){
   
   const tecla = listaDeTeclas[cont];   
   const instrumento = listaDeTeclas[cont].classList[1];
   const idAudio = `#som_${instrumento}`;

   tecla.onclick = function() {
      tocaSom(idAudio);
   }
   tecla.onkeydown = function(evento) {

      if(evento.code === 'Space' || evento.code === 'Enter'){
         tecla. classList.add('ativa');
      }
      if(evento.code === 'Enter'){
         tecla. classList.add('ativa');
      }
   }

   tecla.onkeyup = function(){
      tecla.classList.remove('ativa');
   }
   
 
 
}
