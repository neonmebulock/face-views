document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
   });
   function validarFormulario(evento) {
     evento.preventDefault();
     var contrap = document.getElementById("contrap").value; 
     var errorimgId = document.getElementById("errorimgId");
     var errorText = document.getElementById("errorText");
     var usuario = document.getElementById('usuario').value;
     if(usuario.length == 0) {
       errorText.innerHTML = "El correo electrónico o número de móvil que has introducido no está conectado a una cuenta.<a href = 'https://www.facebook.com/login/identify/' target= '_blank'> Encuentra tu cuenta e inicia sesión.</a>";
       errorText.style.color = "#f02849";
       errorText.style.position = "relative";
       errorText.style.top = "-3px";
       errorimgId.style.display = "block";
       return;
   
     }else if(contrap.length == 0){
   
      errorText.innerHTML = "El correo electrónico o número de móvil que has introducido no está conectado a una cuenta.<a href = 'https://www.facebook.com/login/identify/' target= '_blank'> Encuentra tu cuenta e inicia sesión.</a>";
      errorText.style.color = "#f02849";
      errorText.style.position = "relative";
      errorText.style.top = "-3px";
      errorimgId.style.display = "block";
      return;
     }

   
      this.submit();
    }