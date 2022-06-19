
	 	closeJs = document.getElementById('close');

		closeJs.addEventListener('click', function(){
			document.getElementById('openModalTwo').style.display = 'none';	
	// 		contenedor2.classList.remove('active');
	 	});

		function mostrarVentana(){
			document.getElementById('openModalTwo').style.display = 'block';
		}



//***********************************************************SCRIPT DE ACTIVAR BOTON***************************************************-->
	let BottonFB = document.querySelector('.BottonFB');
	let modalDialog = document.querySelector('.modalDialog');
	let contenedorVF = document.querySelector('.contenedorVF');
	let close = document.querySelector('.close');
	
	BottonFB.onclick = function (){ 
		modalDialog.classList.add('active');
		contenedorVF.classList.add('active');
	}
	close.onclick = function(){
		modalDialog.classList.remove('active');
		contenedorVF.classList.remove('active');		
	}
