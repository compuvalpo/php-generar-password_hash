$(document).ready(function () {

	const clipboard = new ClipboardJS('.btnClip');

	clipboard.on('success', function(e) {

		const id = '#' + e.trigger.getAttribute('id');
		const tooltip = bootstrap.Tooltip.getInstance(id);
		
		e.trigger.setAttribute('data-bs-original-title','Copiado');
		e.trigger.classList.add('btn-success');
		tooltip.show();
		
	});
});

function SwalMensaje(title, text, icon, url) {
    swal.fire({
	  title: title,
	  text: text,
	  icon: icon,
	  confirmButtonText: 'OK',
	  timer: 1500,
	  timerProgressBar: true
	}).then((result) => {

		//window.location =  url
		//window.location.reload();
	});
}

function GenerarPasswordHash(){
	
		let inputData = $("#inputData").val();
        $.ajax({
            url: './password_hash.php',
            type: 'post',
            dataType: 'json',
            data: {"data": inputData},
            success: function(data) {

				if(data){
					setTimeout(function () {

						let div = '<div class="input-group col-12 mb-2"><span class="btn-primary badge d-flex align-items-center">';
						
						$('.card-data').html("");
						$('.card-data').append(div +'COST 10 ['+ data.time10 +'s]</span><span class="form-control" id="cost10">'+ data.cost10 +'</span>'
						+'<button class="input-group-text btnClip" id="btnCOST10" data-clipboard-text="'+ data.cost10 +'" data-bs-toggle="tooltip" data-bs-title="Copiar"><i class="fa-regular fa-copy"></i></button></div>');
						
						$('.card-data').append(div +'COST 12 ['+ data.time12 +'s]</span><span class="form-control" id="cost12">'+ data.cost12 +'</span>'
						+'<button class="input-group-text btnClip" id="btnCOST12" data-clipboard-text="'+ data.cost12 +'" data-bs-toggle="tooltip" data-bs-title="Copiar"><i class="fa-regular fa-copy"></i></button></div>');
						
						$('.card-data').append(div +'COST 15 ['+ data.time15 +'s]</span><span class="form-control" id="cost15">'+ data.cost15 +'</span>'
						+'<button class="input-group-text btnClip" id="btnCOST15" data-clipboard-text="'+ data.cost15 +'" data-bs-toggle="tooltip" data-bs-title="Copiar"><i class="fa-regular fa-copy"></i></button></div>');

					}, 100);
	
					setTimeout(function () {
						const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
						const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
					}, 1000);
					//SwalMensaje('Password Hash Generados', 'Se han generado los Password Hash.', 'success');
				}else{
					SwalMensaje('Password Hash no Generados', 'No se han generado los Password Hash.', 'error');
				}
            },
            error: function(jqXHR, status, error) {
				SwalMensaje('Error', 'Error al intentar de generar los Password Hash.', 'error');
            }
        });
	
}